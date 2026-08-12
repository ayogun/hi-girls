/*
 * Main entry point: renders data-driven content, wires navigation,
 * language toggle, scroll reveal and the two booking flows.
 */

(function () {
    "use strict";

    const $ = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

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
        <div class="service-tile-icon" aria-hidden="true">${s.icon}</div>
        <div class="service-tile-body">
          ${s.featured ? `<span class="badge-featured">${t("services.featured")}</span>` : ""}
          <h3>${tv(s.title)}</h3>
          <p class="service-desc">${tv(s.desc)}</p>
          <div class="service-chips">${s.items.map((i) => `<span class="chip">${tv(i.name)}</span>`).join("")}</div>
          <a href="#booking" class="btn btn-outline btn-sm" data-service="${s.id}">${t("services.book")}</a>
        </div>
      </article>`).join("");
    }

    function renderPricing() {
        const wrap = $("#priceGroups");
        wrap.innerHTML = SERVICES.map((s) => `
      <div class="price-group reveal">
        <h3><span aria-hidden="true">${s.icon}</span> ${tv(s.title)}</h3>
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

        $("#hoursList").innerHTML = SITE.hours.map((h) => {
            const closed = !h.open;
            return `<li><span>${tv(h.day)}</span><span class="${closed ? "closed" : ""}">${closed ? t("contact.closed") : `${h.open} – ${h.close}`
                }</span></li>`;
        }).join("");
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
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        $$(".reveal").forEach((el) => io.observe(el));
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
        renderTeam();
        renderServices();
        renderPricing();
        renderContact();
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

    /* -------------------------------- Init -------------------------------- */

    document.addEventListener("DOMContentLoaded", () => {
        applyStaticI18n();
        renderTeam();
        renderServices();
        renderPricing();
        renderContact();
        setupNav();
        setupBooking();
        setupLang();
        setupReveal();
    });
})();
