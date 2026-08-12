/*
 * UI string translations for static interface text.
 * Content data (services, team, tips) carries its own pl/en fields in data.js.
 * Elements with a data-i18n attribute get their text from the matching key.
 */

const I18N = {
    pl: {
        "nav.team": "Poznaj nasz zespół",
        "nav.koloryzacje": "Koloryzacje",
        "nav.przedluzanie": "Przedłużanie włosów",
        "nav.kosmetyki": "Kosmetyki",
        "nav.makijaz": "Makijaż",
        "nav.cennik": "Cennik",
        "nav.blog": "Blog",
        "nav.book": "Umów wizytę",

        "hero.subtitle": "Salon fryzjersko-kosmetyczny w Mławie",
        "hero.titleA": "Twój perfekcyjny",
        "hero.titleAccent": "blond",
        "hero.titleB": "w dobrych rękach",
        "hero.desc": "Specjalizujemy się w pięknym, zdrowym blondzie — ale to nie wszystko, co dla Ciebie mamy.",
        "hero.cta": "Umów wizytę online",
        "hero.cta2": "Zobacz cennik",

        "team.title": "Poznaj nasz zespół",
        "team.subtitle": "Ludzie, którzy zadbają o Twoje piękno",

        "services.title": "Nasze usługi",
        "services.subtitle": "Od blondu, przez pielęgnację, po makijaż — kompleksowo dbamy o Twój wygląd",
        "services.featured": "Nasza specjalność",
        "services.book": "Umów tę usługę",
        "services.explore": "Pełny cennik znajdziesz niżej",

        "cennik.title": "Cennik",
        "cennik.subtitle": "Ceny orientacyjne — ostateczna wycena po konsultacji",
        "cennik.note": "* Ceny mogą się różnić w zależności od długości i gęstości włosów.",

        "blog.eyebrow": "Bądź na bieżąco",
        "blog.title": "Zajrzyj na naszego bloga",
        "blog.text": "Metamorfozy, inspiracje i porady prosto z naszych social mediów. Zobacz, co u nas słychać!",
        "blog.cta": "Odwiedź bloga",

        "booking.title": "Umów wizytę",
        "booking.subtitle": "Zarezerwuj termin online — bez dzwonienia.",
        "booking.tabCustomer": "Rezerwacja online",
        "booking.tabStaff": "Panel pracownika",
        "booking.name": "Imię i nazwisko",
        "booking.phone": "Telefon",
        "booking.email": "E-mail (opcjonalnie)",
        "booking.service": "Usługa",
        "booking.stylist": "Specjalista",
        "booking.date": "Data",
        "booking.time": "Godzina",
        "booking.notes": "Uwagi (opcjonalnie)",
        "booking.submit": "Zarezerwuj wizytę",
        "booking.selectService": "Wybierz usługę",
        "booking.selectTime": "Wybierz godzinę",
        "booking.noSlots": "Brak wolnych terminów w tym dniu.",
        "booking.closedDay": "W tym dniu salon jest nieczynny.",
        "booking.success": "Dziękujemy! Twoja wizyta została zarezerwowana.",
        "booking.successStaff": "Wizyta została dodana do systemu.",
        "booking.errorRequired": "Uzupełnij wymagane pola.",
        "booking.errorTaken": "Ten termin jest już zajęty. Wybierz inny.",

        "staff.pinPrompt": "Podaj PIN pracownika, aby uzyskać dostęp.",
        "staff.pinLabel": "PIN",
        "staff.pinSubmit": "Zaloguj",
        "staff.pinError": "Nieprawidłowy PIN.",
        "staff.newBooking": "Dodaj rezerwację dla klienta",
        "staff.list": "Nadchodzące wizyty",
        "staff.empty": "Brak zarezerwowanych wizyt.",
        "staff.cancel": "Odwołaj",
        "staff.logout": "Wyloguj",
        "staff.source.customer": "online",
        "staff.source.staff": "recepcja",

        "contact.title": "Kontakt",
        "contact.hours": "Godziny otwarcia",
        "contact.address": "Adres",
        "contact.closed": "Nieczynne",
        "contact.findUs": "Znajdź nas",

        "footer.rights": "Wszelkie prawa zastrzeżone.",
        "lang.toggle": "EN",
    },
    en: {
        "nav.team": "Meet the Team",
        "nav.koloryzacje": "Coloring",
        "nav.przedluzanie": "Hair Extensions",
        "nav.kosmetyki": "Cosmetics",
        "nav.makijaz": "Makeup",
        "nav.cennik": "Pricing",
        "nav.blog": "Blog",
        "nav.book": "Book a Visit",

        "hero.subtitle": "Hair & beauty salon in Mława",
        "hero.titleA": "Your perfect",
        "hero.titleAccent": "blonde",
        "hero.titleB": "in good hands",
        "hero.desc": "We specialize in beautiful, healthy blonde — but that's far from all we offer.",
        "hero.cta": "Book online",
        "hero.cta2": "See pricing",

        "team.title": "Meet the Team",
        "team.subtitle": "The people who care for your beauty",

        "services.title": "Our Services",
        "services.subtitle": "From blonde to hair care to makeup — complete care for your look",
        "services.featured": "Our specialty",
        "services.book": "Book this service",
        "services.explore": "Full price list below",

        "cennik.title": "Pricing",
        "cennik.subtitle": "Indicative prices — final quote after consultation",
        "cennik.note": "* Prices may vary depending on hair length and thickness.",

        "blog.eyebrow": "Stay in touch",
        "blog.title": "Visit our blog",
        "blog.text": "Makeovers, inspiration and tips straight from our social media. See what's new with us!",
        "blog.cta": "Visit the blog",

        "booking.title": "Book a Visit",
        "booking.subtitle": "Reserve your slot online — no phone call needed.",
        "booking.tabCustomer": "Online booking",
        "booking.tabStaff": "Staff panel",
        "booking.name": "Full name",
        "booking.phone": "Phone",
        "booking.email": "Email (optional)",
        "booking.service": "Service",
        "booking.stylist": "Specialist",
        "booking.date": "Date",
        "booking.time": "Time",
        "booking.notes": "Notes (optional)",
        "booking.submit": "Book appointment",
        "booking.selectService": "Select a service",
        "booking.selectTime": "Select a time",
        "booking.noSlots": "No available slots on this day.",
        "booking.closedDay": "The salon is closed on this day.",
        "booking.success": "Thank you! Your appointment has been booked.",
        "booking.successStaff": "The appointment was added to the system.",
        "booking.errorRequired": "Please fill in the required fields.",
        "booking.errorTaken": "This slot is already taken. Please pick another.",

        "staff.pinPrompt": "Enter the staff PIN to gain access.",
        "staff.pinLabel": "PIN",
        "staff.pinSubmit": "Sign in",
        "staff.pinError": "Invalid PIN.",
        "staff.newBooking": "Add a booking for a client",
        "staff.list": "Upcoming appointments",
        "staff.empty": "No appointments booked.",
        "staff.cancel": "Cancel",
        "staff.logout": "Sign out",
        "staff.source.customer": "online",
        "staff.source.staff": "reception",

        "contact.title": "Contact",
        "contact.hours": "Opening hours",
        "contact.address": "Address",
        "contact.closed": "Closed",
        "contact.findUs": "Find us",

        "footer.rights": "All rights reserved.",
        "lang.toggle": "PL",
    },
};

let CURRENT_LANG = localStorage.getItem("higirls_lang") || "pl";

function t(key) {
    const dict = I18N[CURRENT_LANG] || I18N.pl;
    return dict[key] ?? key;
}

// Pick the pl/en value from a content object like { pl, en }.
function tv(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[CURRENT_LANG] ?? obj.pl ?? "";
}

function applyStaticI18n() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
        el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph")));
    });
    document.documentElement.lang = CURRENT_LANG;
}

function setLang(lang) {
    CURRENT_LANG = lang;
    localStorage.setItem("higirls_lang", lang);
    applyStaticI18n();
    document.dispatchEvent(new CustomEvent("langchange"));
}
