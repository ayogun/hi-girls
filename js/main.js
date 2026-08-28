/*
 * Main entry point: renders data-driven content, wires navigation,
 * language toggle, scroll reveal and the two booking flows.
 */

(function () {
    "use strict";

    // Signals CSS that scripting is available (scroll-reveal falls back to visible without it).
    document.documentElement.classList.add("js");

    const $ = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

    /* ------------------------------- Icons -------------------------------- */

    const ICON_PATHS = {
        koloryzacje: '<path d="M12 3s5.5 5.9 5.5 10a5.5 5.5 0 0 1-11 0C6.5 8.9 12 3 12 3Z"/><path d="M9.5 13.5a2.8 2.8 0 0 0 2.8 2.8"/>',
        strzyzenie: '<circle cx="6" cy="6" r="2.6"/><circle cx="6" cy="18" r="2.6"/><path d="M20 4 8.4 15.6"/><path d="m14.5 14.5 5.5 5.5"/><path d="M8.4 8.4 12 12"/>',
        przedluzanie: '<path d="M7 3c-1.4 2 1.4 4 0 6s1.4 4 0 6 1.4 4 0 6"/><path d="M12 3c-1.4 2 1.4 4 0 6s1.4 4 0 6 1.4 4 0 6"/><path d="M17 3c-1.4 2 1.4 4 0 6s1.4 4 0 6 1.4 4 0 6"/>',
        kosmetyki: '<path d="M9.5 3h5"/><path d="M10 3v3l-1.6 2.4A3 3 0 0 0 8 10.9V19a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-8.1a3 3 0 0 0-.4-1.5L14 6V3"/><path d="M8 13h8"/>',
        brwi: '<path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z"/><circle cx="12" cy="12" r="2.6"/>',
        makijaz: '<rect x="9" y="12" width="6" height="9" rx="1.4"/><path d="M9.4 12 11 4.6a1.5 1.5 0 0 1 3 .3L15 12"/>',
        droplet: '<path d="M12 3s5.5 5.9 5.5 10a5.5 5.5 0 0 1-11 0C6.5 8.9 12 3 12 3Z"/><path d="M9.5 13.5a2.8 2.8 0 0 0 2.8 2.8"/>',
        leaf: '<path d="M21 3c-9 0-15 4-15 12a6 6 0 0 0 6 6c8 0 12-6 12-15 0-1.6 0-3-3-3Z"/><path d="M6 21c2-6 6-10 12-12"/>',
        calendar: '<rect x="3" y="4.5" width="18" height="16.5" rx="2.4"/><path d="M16 2.5v4M8 2.5v4M3 10h18"/>',
        heart: '<path d="M20.8 6.2a4.6 4.6 0 0 0-6.5 0L12 8.4l-2.3-2.2a4.6 4.6 0 1 0-6.5 6.5l2.3 2.2L12 21l6.5-6.3 2.3-2.2a4.6 4.6 0 0 0 0-6.3Z"/>',
    };

    function icon(name) {
        return `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON_PATHS[name] || ""}</svg>`;
    }

    function starsMarkup(count = 5) {
        const star = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.6l2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.77 6.3 20.16l1.09-6.35-4.62-4.5 6.38-.93z"/></svg>';
        return star.repeat(count);
    }

    function renderStars() {
        $$(".stars").forEach((el) => { el.innerHTML = starsMarkup(5); });
    }

    /* ----------------------------- Rendering ------------------------------ */

    function renderTeam() {
        const grid = $("#teamGrid");
        grid.innerHTML = TEAM.map((m) => `
      <article class="team-card reveal">
        <div class="team-photo"><img src="${m.photo}" alt="${m.name}" loading="lazy" /></div>
        <div class="team-body">
          <h3>${m.name}</h3>
          <p class="role">${tv(m.role)}</p>
          <p class="bio">${tv(m.bio)}</p>
          <div class="tags">${tv(m.tags).map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        </div>
      </article>`).join("");
    }

    function renderServices() {
        const grid = $("#servicesGrid");
        grid.innerHTML = SERVICES.map((s) => `
      <article class="service-tile reveal ${s.featured ? "featured" : ""}" id="${s.id}">
        <div class="service-tile-icon" aria-hidden="true">${icon(s.id)}</div>
        <div class="service-tile-body">
          ${s.featured ? `<span class="badge-featured">${t("services.featured")}</span>` : ""}
          <h3>${tv(s.title)}</h3>
          <p class="service-desc">${tv(s.desc)}</p>
          <div class="service-chips">${s.items.map((i) => `<span class="chip">${tv(i.name)}</span>`).join("")}</div>
          <div class="service-foot">
            ${s.from ? `<span class="service-from">${tv(s.from)}</span>` : ""}
            <a href="#booking" class="btn btn-outline btn-sm" data-service="${s.id}">${t("services.book")}</a>
          </div>
        </div>
      </article>`).join("");
    }

    function renderPricing() {
        const wrap = $("#priceGroups");
        wrap.innerHTML = SERVICES.map((s) => `
      <div class="price-group reveal">
        <h3><span class="price-ico" aria-hidden="true">${icon(s.id)}</span> ${tv(s.title)}</h3>
        <ul>
          ${s.items.map((i) => `<li><span>${tv(i.name)}</span><span class="price">${i.price}</span></li>`).join("")}
        </ul>
      </div>`).join("");
    }

    function renderContact() {
        $("#contactAddress").textContent = SITE.address;
        const phone = $("#contactPhone");
        phone.textContent = SITE.phone;
        phone.href = `tel:${SITE.phone.replace(/\s+/g, "")}`;
        const email = $("#contactEmail");
        email.textContent = SITE.email;
        email.href = `mailto:${SITE.email}`;
        $("#socialIg").href = SITE.social.instagram;
        $("#socialFb").href = SITE.social.facebook;
        $("#blogLink").href = SITE.blogUrl;
        $("#mapFrame").src = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`;
        $("#year").textContent = new Date().getFullYear();

        // Footer mirrors of the contact details.
        const fAddr = $("#footerAddress");
        if (fAddr) fAddr.textContent = SITE.address;
        const fPhone = $("#footerPhone");
        if (fPhone) { fPhone.textContent = SITE.phone; fPhone.href = `tel:${SITE.phone.replace(/\s+/g, "")}`; }
        const fEmail = $("#footerEmail");
        if (fEmail) { fEmail.textContent = SITE.email; fEmail.href = `mailto:${SITE.email}`; }
        const fIg = $("#footerIg");
        if (fIg) fIg.href = SITE.social.instagram;
        const fFb = $("#footerFb");
        if (fFb) fFb.href = SITE.social.facebook;
        const fHours = $("#footerHours");
        if (fHours) {
            fHours.innerHTML = SITE.hours.map((h) => {
                const closed = !h.open;
                return `<li><span>${tv(h.day)}</span><span class="${closed ? "closed" : ""}">${closed ? t("contact.closed") : `${h.open}–${h.close}`}</span></li>`;
            }).join("");
        }

        $("#hoursList").innerHTML = SITE.hours.map((h) => {
            const closed = !h.open;
            return `<li><span>${tv(h.day)}</span><span class="${closed ? "closed" : ""}">${closed ? t("contact.closed") : `${h.open} – ${h.close}`
                }</span></li>`;
        }).join("");
    }

    function renderStats() {
        const el = $("#statsGrid");
        if (!el) return;
        el.innerHTML = STATS.map((s) => `
      <div class="stat">
        <span class="stat-value">${s.value}</span>
        <span class="stat-label">${tv(s.label)}</span>
      </div>`).join("");
    }

    function renderValues() {
        const el = $("#valuesGrid");
        if (!el) return;
        el.innerHTML = VALUES.map((v) => `
      <article class="value-card reveal">
        <div class="value-icon" aria-hidden="true">${icon(v.icon)}</div>
        <h3>${tv(v.title)}</h3>
        <p>${tv(v.text)}</p>
      </article>`).join("");
    }

    function renderReviews() {
        const el = $("#reviewsGrid");
        if (!el) return;
        el.innerHTML = TESTIMONIALS.map((r) => `
      <figure class="review-card reveal">
        <div class="stars" aria-hidden="true">${starsMarkup(5)}</div>
        <blockquote>${tv(r.quote)}</blockquote>
        <figcaption>
          <span class="review-name">${r.name}</span>
          <span class="review-service">${tv(r.service)}</span>
        </figcaption>
      </figure>`).join("");
    }

    /* --------------------------- Booking forms ---------------------------- */

    function fillSelect(select, options, placeholder) {
        const current = select.value;
        select.innerHTML =
            (placeholder ? `<option value="" disabled ${current ? "" : "selected"}>${placeholder}</option>` : "") +
            options.map((o) => `<option value="${o.value}">${o.label}</option>`).join("");
        if (current) select.value = current;
    }

    function populateServiceStylist(scope) {
        const serviceSel = $(`[data-role="service"]`, scope);
        const stylistSel = $(`[data-role="stylist"]`, scope);
        fillSelect(
            serviceSel,
            SERVICES.map((s) => ({ value: s.id, label: tv(s.title) })),
            t("booking.selectService")
        );
        fillSelect(
            stylistSel,
            STYLISTS.map((s) => ({ value: s.id, label: tv(s.name) }))
        );
    }

    function setupDateBounds(scope) {
        const dateInput = $(`[data-role="date"]`, scope);
        const today = toISODate(new Date());
        const max = new Date();
        max.setMonth(max.getMonth() + 3);
        dateInput.min = today;
        dateInput.max = toISODate(max);
    }

    function refreshSlots(scope) {
        const dateInput = $(`[data-role="date"]`, scope);
        const timeSel = $(`[data-role="time"]`, scope);
        const stylistSel = $(`[data-role="stylist"]`, scope);
        const { closed, slots } = Booking.slotsForDate(dateInput.value);

        if (!dateInput.value) {
            fillSelect(timeSel, [], t("booking.selectTime"));
            return;
        }
        if (closed) {
            timeSel.innerHTML = `<option value="" disabled selected>${t("booking.closedDay")}</option>`;
            return;
        }
        const stylist = stylistSel.value || "any";
        const free = slots.filter((time) => !Booking.isTaken({ date: dateInput.value, time, stylist }));
        if (!free.length) {
            timeSel.innerHTML = `<option value="" disabled selected>${t("booking.noSlots")}</option>`;
            return;
        }
        fillSelect(timeSel, free.map((s) => ({ value: s, label: s })), t("booking.selectTime"));
    }

    function showMsg(el, key, type) {
        el.textContent = t(key);
        el.className = `form-msg ${type}`;
        el.hidden = false;
    }

    function readForm(form) {
        const data = Object.fromEntries(new FormData(form).entries());
        return {
            customerName: (data.name || "").trim(),
            phone: (data.phone || "").trim(),
            email: (data.email || "").trim(),
            service: data.service || "",
            stylist: data.stylist || "any",
            date: data.date || "",
            time: data.time || "",
            notes: (data.notes || "").trim(),
        };
    }

    function handleSubmit(form, source, msgEl, onSuccess) {
        const entry = readForm(form);
        if (!entry.customerName || !entry.phone || !entry.service || !entry.date || !entry.time) {
            showMsg(msgEl, "booking.errorRequired", "error");
            return;
        }
        const res = Booking.add({ ...entry, source });
        if (!res.ok) {
            showMsg(msgEl, "booking.errorTaken", "error");
            const scope = form.closest(".booking-panel");
            refreshSlots(scope);
            return;
        }
        showMsg(msgEl, source === "staff" ? "booking.successStaff" : "booking.success", "success");
        form.reset();
        refreshSlots(form.closest(".booking-panel"));
        if (onSuccess) onSuccess();
    }

    function renderBookingList() {
        const list = $("#bookingList");
        const items = Booking.upcoming();
        if (!items.length) {
            list.innerHTML = `<p class="bi-sub">${t("staff.empty")}</p>`;
            return;
        }
        list.innerHTML = items.map((b) => {
            const stylist = STYLISTS.find((s) => s.id === b.stylist);
            const service = SERVICES.find((s) => s.id === b.service);
            const sourceLabel = t(`staff.source.${b.source}`);
            return `
        <div class="booking-item">
          <div>
            <div class="bi-main">${b.date} · ${b.time} — ${b.customerName}</div>
            <div class="bi-sub">${service ? tv(service.title) : b.service} · ${stylist ? tv(stylist.name) : ""} · ${b.phone}</div>
            <span class="bi-source">${sourceLabel}</span>
          </div>
          <button class="link-btn" data-cancel="${b.id}">${t("staff.cancel")}</button>
        </div>`;
        }).join("");
    }

    /* ----------------------------- Navigation ----------------------------- */

    function setupNav() {
        const hamburger = $("#hamburger");
        const navLinks = $("#navLinks");
        hamburger.addEventListener("click", () => {
            const open = navLinks.classList.toggle("open");
            hamburger.classList.toggle("open", open);
            hamburger.setAttribute("aria-expanded", String(open));
        });
        navLinks.addEventListener("click", (e) => {
            if (e.target.tagName === "A") {
                navLinks.classList.remove("open");
                hamburger.classList.remove("open");
                hamburger.setAttribute("aria-expanded", "false");
            }
        });
    }

    function setupReveal() {
        const els = $$(".reveal:not(.visible)");
        if (!("IntersectionObserver" in window)) {
            els.forEach((el) => el.classList.add("visible"));
            return;
        }
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        els.forEach((el) => io.observe(el));
    }

    function setupSticky() {
        const el = $("#stickyCta");
        if (!el) return;
        const booking = $("#booking");
        const onScroll = () => {
            const pastHero = window.scrollY > 640;
            const nearBooking = booking && booking.getBoundingClientRect().top < window.innerHeight * 0.9;
            el.classList.toggle("visible", pastHero && !nearBooking);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
    }

    /* ------------------------------ Booking UI ---------------------------- */

    function setupBooking() {
        const panelCustomer = $("#panelCustomer");
        const panelStaff = $("#panelStaff");
        const tabCustomer = $("#tabCustomer");
        const tabStaff = $("#tabStaff");

        function selectTab(which) {
            const isCustomer = which === "customer";
            tabCustomer.classList.toggle("active", isCustomer);
            tabStaff.classList.toggle("active", !isCustomer);
            tabCustomer.setAttribute("aria-selected", String(isCustomer));
            tabStaff.setAttribute("aria-selected", String(!isCustomer));
            panelCustomer.hidden = !isCustomer;
            panelStaff.hidden = isCustomer;
        }
        tabCustomer.addEventListener("click", () => selectTab("customer"));
        tabStaff.addEventListener("click", () => selectTab("staff"));

        // Customer flow
        populateServiceStylist(panelCustomer);
        setupDateBounds(panelCustomer);
        $(`[data-role="date"]`, panelCustomer).addEventListener("change", () => refreshSlots(panelCustomer));
        $(`[data-role="stylist"]`, panelCustomer).addEventListener("change", () => refreshSlots(panelCustomer));
        $("#customerForm").addEventListener("submit", (e) => {
            e.preventDefault();
            handleSubmit(e.target, "customer", $("#customerMsg"));
        });

        // Deep-link "book this service" buttons -> preselect service + jump
        document.addEventListener("click", (e) => {
            const btn = e.target.closest("[data-service]");
            if (!btn) return;
            selectTab("customer");
            const sel = $(`[data-role="service"]`, panelCustomer);
            sel.value = btn.getAttribute("data-service");
        });

        // Staff flow (PIN gate)
        const pinGate = $("#pinGate");
        const staffContent = $("#staffContent");
        $("#pinForm").addEventListener("submit", (e) => {
            e.preventDefault();
            const val = $("#s-pin").value.trim();
            if (val === BOOKING_CONFIG.staffPin) {
                pinGate.hidden = true;
                staffContent.hidden = false;
                populateServiceStylist(panelStaff);
                setupDateBounds(panelStaff);
                renderBookingList();
            } else {
                showMsg($("#pinMsg"), "staff.pinError", "error");
            }
            $("#s-pin").value = "";
        });
        $("#staffLogout").addEventListener("click", () => {
            staffContent.hidden = true;
            pinGate.hidden = false;
            $("#pinMsg").hidden = true;
        });
        $(`[data-role="date"]`, panelStaff).addEventListener("change", () => refreshSlots(panelStaff));
        $(`[data-role="stylist"]`, panelStaff).addEventListener("change", () => refreshSlots(panelStaff));
        $("#staffForm").addEventListener("submit", (e) => {
            e.preventDefault();
            handleSubmit(e.target, "staff", $("#staffMsg"), renderBookingList);
        });

        // Cancel bookings from the staff list
        $("#bookingList").addEventListener("click", (e) => {
            const btn = e.target.closest("[data-cancel]");
            if (!btn) return;
            Booking.remove(btn.getAttribute("data-cancel"));
            renderBookingList();
        });
    }

    /* ------------------------------ Language ------------------------------ */

    function renderDynamic() {
        renderStats();
        renderValues();
        renderTeam();
        renderServices();
        renderPricing();
        renderReviews();
        renderContact();
        renderStars();
        // Re-fill selects so option labels follow the active language.
        populateServiceStylist($("#panelCustomer"));
        if (!$("#staffContent").hidden) {
            populateServiceStylist($("#panelStaff"));
            renderBookingList();
        }
        setupReveal();
    }

    function setupLang() {
        $("#langToggle").addEventListener("click", () => {
            setLang(CURRENT_LANG === "pl" ? "en" : "pl");
        });
        document.addEventListener("langchange", renderDynamic);
    }

    /* --------------------------- Coming soon gate ------------------------ */

    function setupComingSoon() {
        const gate = $("#comingSoon");
        if (!gate) return false;

        const now = new Date();
        const targetYear = now.getFullYear();
        const openingDate = new Date(targetYear, 9, 1, 9, 0, 0, 0); // Oct 1, 09:00 local time

        if (now >= openingDate) {
            gate.hidden = true;
            document.body.classList.remove("coming-soon-active");
            return false;
        }

        const daysEl = $("#countDays");
        const hoursEl = $("#countHours");
        const minutesEl = $("#countMinutes");
        const secondsEl = $("#countSeconds");
        const pad = (n) => String(n).padStart(2, "0");

        function renderCountdown() {
            const diffMs = openingDate.getTime() - Date.now();
            if (diffMs <= 0) {
                gate.hidden = true;
                document.body.classList.remove("coming-soon-active");
                window.location.reload();
                return;
            }

            const totalSeconds = Math.floor(diffMs / 1000);
            const days = Math.floor(totalSeconds / 86400);
            const hours = Math.floor((totalSeconds % 86400) / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;

            daysEl.textContent = String(days);
            hoursEl.textContent = pad(hours);
            minutesEl.textContent = pad(minutes);
            secondsEl.textContent = pad(seconds);
        }

        document.body.classList.add("coming-soon-active");
        gate.hidden = false;
        renderCountdown();
        window.setInterval(renderCountdown, 1000);
        return true;
    }

    /* -------------------------------- Init -------------------------------- */

    document.addEventListener("DOMContentLoaded", () => {
        if (setupComingSoon()) return;

        applyStaticI18n();
        renderStats();
        renderValues();
        renderTeam();
        renderServices();
        renderPricing();
        renderReviews();
        renderContact();
        renderStars();
        setupNav();
        setupBooking();
        setupLang();
        setupSticky();
        setupReveal();
    });
})();
