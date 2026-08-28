/*
 * UI string translations for static interface text.
 * Content data (services, team, tips) carries its own pl/en fields in data.js.
 * Elements with a data-i18n attribute get their text from the matching key.
 */

const I18N = {
    pl: {
        "nav.team": "Zespół",
        "nav.koloryzacje": "Koloryzacje",
        "nav.przedluzanie": "Przedłużanie",
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

        "team.eyebrow": "Twoje specjalistki",
        "services.eyebrow": "Pełen zakres usług",
        "cennik.eyebrow": "Przejrzyste ceny",
        "booking.eyebrow": "Wygodna rezerwacja",

        "hero.ratingNote": "Zaufało nam 2000+ klientek",
        "hero.trustA": "Bez przedpłaty",
        "hero.trustB": "Darmowa konsultacja",
        "hero.trustC": "Dogodne odwołanie",

        "values.eyebrow": "Dlaczego Hi Girls",
        "values.title": "Dlaczego kobiety wybierają Hi Girls",
        "values.subtitle": "Cztery powody, dla których zostajesz z nami na dłużej.",

        "reviews.eyebrow": "Opinie klientek",
        "reviews.title": "Pokochały efekt — i wracają",

        "booking.trust": "Potwierdzenie od ręki · Bez przedpłaty · Możliwość odwołania",
        "sticky.text": "Gotowa na swój najlepszy blond?",

        "footer.explore": "Nawigacja",
        "footer.contactTitle": "Kontakt",
        "footer.tagline": "Salon fryzjersko-kosmetyczny w Mławie. Specjaliści od zdrowego blondu, przedłużania włosów, pielęgnacji i makijażu.",

        "footer.rights": "Wszelkie prawa zastrzeżone.",
        "lang.toggle": "EN",

        "eyebrow.team": "Ludzie Hi Girls",
        "eyebrow.services": "Co dla Ciebie robimy",
        "eyebrow.values": "Dlaczego Hi Girls",
        "eyebrow.pricing": "Przejrzyste ceny",
        "eyebrow.reviews": "Opinie klientek",
        "eyebrow.booking": "Rezerwacja online",

        "hero.rating": "4,9/5 na podstawie 180+ opinii",
        "hero.trust1": "10+ lat doświadczenia",
        "hero.trust2": "Bez przedpłaty",
        "hero.trust3": "Potwierdzenie od ręki",

        "values.title": "Dlaczego kobiety wybierają Hi Girls",
        "values.subtitle": "Cztery powody, dla których wizyta u nas to czysta przyjemność.",

        "reviews.title": "Zaufały nam setki klientek",
        "reviews.subtitle": "Prawdziwe opinie po wizytach w naszym salonie.",
        "reviews.ratingLabel": "średnia z 180+ opinii",

        "booking.trust": "Bez przedpłaty · Potwierdzenie od ręki · Odwołasz w każdej chwili",

        "sticky.text": "Wolne terminy w tym tygodniu",
        "sticky.cta": "Umów wizytę",

        "footer.explore": "Nawigacja",
        "footer.contactHead": "Kontakt",
        "footer.hoursHead": "Godziny otwarcia",
        "footer.tagline": "Twój perfekcyjny blond w dobrych rękach — salon Hi Girls w Mławie.",
    },
    en: {
        "nav.team": "Team",
        "nav.koloryzacje": "Coloring",
        "nav.przedluzanie": "Extensions",
        "nav.kosmetyki": "Care",
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

        "team.eyebrow": "Your specialists",
        "services.eyebrow": "The full menu",
        "cennik.eyebrow": "Transparent pricing",
        "booking.eyebrow": "Easy booking",

        "hero.ratingNote": "Trusted by 2000+ clients",
        "hero.trustA": "No prepayment",
        "hero.trustB": "Free consultation",
        "hero.trustC": "Easy cancellation",

        "values.eyebrow": "Why Hi Girls",
        "values.title": "Why women choose Hi Girls",
        "values.subtitle": "Four reasons you'll want to stay with us for the long run.",

        "reviews.eyebrow": "Client reviews",
        "reviews.title": "They loved the result — and keep coming back",

        "booking.trust": "Instant confirmation · No prepayment · Free cancellation",
        "sticky.text": "Ready for your best blonde yet?",

        "footer.explore": "Explore",
        "footer.contactTitle": "Contact",
        "footer.tagline": "Hair & beauty salon in Mława. Specialists in healthy blonde, extensions, hair care and makeup.",

        "footer.rights": "All rights reserved.",
        "lang.toggle": "PL",

        "eyebrow.team": "The Hi Girls people",
        "eyebrow.services": "What we do for you",
        "eyebrow.values": "Why Hi Girls",
        "eyebrow.pricing": "Transparent pricing",
        "eyebrow.reviews": "Client reviews",
        "eyebrow.booking": "Online booking",

        "hero.rating": "4.9/5 from 180+ reviews",
        "hero.trust1": "10+ years of experience",
        "hero.trust2": "No prepayment",
        "hero.trust3": "Instant confirmation",

        "values.title": "Why women choose Hi Girls",
        "values.subtitle": "Four reasons a visit with us is a genuine pleasure.",

        "reviews.title": "Trusted by hundreds of clients",
        "reviews.subtitle": "Real reviews after visits to our salon.",
        "reviews.ratingLabel": "average from 180+ reviews",

        "booking.trust": "No prepayment · Instant confirmation · Cancel anytime",

        "sticky.text": "Openings available this week",
        "sticky.cta": "Book now",

        "footer.explore": "Explore",
        "footer.contactHead": "Contact",
        "footer.hoursHead": "Opening hours",
        "footer.tagline": "Your perfect blonde in good hands — the Hi Girls salon in Mława.",
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
