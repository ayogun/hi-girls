/*
 * Editable content for the Hi Girls website.
 * Everything a non-developer might want to change lives here:
 * team members, service categories, prices, stylists and tips.
 * Text fields hold both Polish (pl) and English (en) values.
 */

const SITE = {
    brand: "Hi Girls",
    tagline: { pl: "Specjaliści od blondu", en: "Blonde Specialists" },
    phone: "+48 500 000 000",
    email: "kontakt@higirls.pl",
    address: "aleja Marszałka Józefa Piłsudskiego 35/48, 06-500 Mława",
    mapsQuery: "aleja Marszałka Józefa Piłsudskiego 35, 06-500 Mława",
    social: {
        instagram: "https://instagram.com/",
        facebook: "https://facebook.com/",
    },
    // Where the "Blog" button sends visitors (social feed for now).
    blogUrl: "https://instagram.com/",
    hours: [
        { day: { pl: "Poniedziałek", en: "Monday" }, open: "09:00", close: "18:00" },
        { day: { pl: "Wtorek", en: "Tuesday" }, open: "09:00", close: "18:00" },
        { day: { pl: "Środa", en: "Wednesday" }, open: "09:00", close: "18:00" },
        { day: { pl: "Czwartek", en: "Thursday" }, open: "09:00", close: "20:00" },
        { day: { pl: "Piątek", en: "Friday" }, open: "09:00", close: "20:00" },
        { day: { pl: "Sobota", en: "Saturday" }, open: "09:00", close: "15:00" },
        { day: { pl: "Niedziela", en: "Sunday" }, open: null, close: null },
    ],
};

// Team members shown in "Poznaj nasz zespół".
const TEAM = [
    {
        id: "martyna",
        name: "Martyna Kowalska",
        role: { pl: "Właścicielka & Kolorystka", en: "Owner & Colorist" },
        bio: {
            pl: "Miłośniczka perfekcyjnego blondu i zdrowych włosów. Ponad 10 lat doświadczenia.",
            en: "In love with flawless blonde and healthy hair. 10+ years of experience.",
        },
        tags: { pl: ["Blond", "Koloryzacja"], en: ["Blonde", "Coloring"] },
        photo: "assets/team-1.jpg",
    },
    {
        id: "anna",
        name: "Anna Nowak",
        role: { pl: "Kolorystka & Stylistka", en: "Colorist & Stylist" },
        bio: {
            pl: "Balayage, sombre i rozświetlenia — uwielbia rozświetlać włosy słońcem.",
            en: "Balayage, sombre and highlights — loves sun-kissed hair.",
        },
        tags: { pl: ["Balayage", "Strzyżenie"], en: ["Balayage", "Cut"] },
        photo: "assets/team-2.jpg",
    },
    {
        id: "klaudia",
        name: "Klaudia Wiśniewska",
        role: { pl: "Specjalistka od przedłużania", en: "Extensions Specialist" },
        bio: {
            pl: "Naturalne przedłużanie i zagęszczanie włosów metodą taśmową i keratynową.",
            en: "Natural tape-in and keratin hair extensions and volume.",
        },
        tags: { pl: ["Przedłużanie"], en: ["Extensions"] },
        photo: "assets/team-3.jpg",
    },
    {
        id: "paulina-w",
        name: "Paulina Wójcik",
        role: { pl: "Wizażystka & Stylistka", en: "Makeup Artist & Stylist" },
        bio: {
            pl: "Makijaż dzienny, wieczorowy i ślubny oraz upięcia okolicznościowe.",
            en: "Day, evening and bridal makeup plus occasion updos.",
        },
        tags: { pl: ["Makijaż", "Upięcia"], en: ["Makeup", "Updos"] },
        photo: "assets/team-4.jpg",
    },
    {
        id: "paulina-l",
        name: "Paulina Lewandowska",
        role: { pl: "Kosmetolog · Brwi i rzęsy", en: "Beautician · Brows & Lashes" },
        bio: {
            pl: "Stylizacja brwi, laminacja i przedłużanie rzęs — spojrzenie, które zachwyca.",
            en: "Brow styling, lamination and lash extensions — a captivating look.",
        },
        tags: { pl: ["Brwi", "Rzęsy"], en: ["Brows", "Lashes"] },
        photo: "assets/team-5.jpg",
    },
];

// Stylists selectable in the booking form.
const STYLISTS = [
    { id: "any", name: { pl: "Dowolny specjalista", en: "Any specialist" } },
    { id: "martyna", name: { pl: "Martyna Kowalska", en: "Martyna Kowalska" } },
    { id: "anna", name: { pl: "Anna Nowak", en: "Anna Nowak" } },
    { id: "klaudia", name: { pl: "Klaudia Wiśniewska", en: "Klaudia Wiśniewska" } },
    { id: "paulina-w", name: { pl: "Paulina Wójcik", en: "Paulina Wójcik" } },
    { id: "paulina-l", name: { pl: "Paulina Lewandowska", en: "Paulina Lewandowska" } },
];

// Service categories with individual services and prices (PLN).
const SERVICES = [
    {
        id: "koloryzacje",
        icon: "🎨",
        title: { pl: "Koloryzacje", en: "Coloring" },
        featured: true,
        desc: {
            pl: "Nasza specjalność — perfekcyjny, zdrowy blond. Balayage, sombre, rozświetlenia i korekty koloru.",
            en: "Our specialty — flawless, healthy blonde. Balayage, sombre, highlights and colour correction.",
        },
        items: [
            { name: { pl: "Balayage / Sombre", en: "Balayage / Sombre" }, price: "od 350 zł" },
            { name: { pl: "Ombre / Flamboyage", en: "Ombre / Flamboyage" }, price: "od 350 zł" },
            { name: { pl: "Rozjaśnianie całości", en: "Full lightening" }, price: "od 300 zł" },
            { name: { pl: "Refleksy / Baby lights", en: "Highlights / Baby lights" }, price: "od 250 zł" },
            { name: { pl: "Tonowanie blondu", en: "Blonde toning" }, price: "od 120 zł" },
            { name: { pl: "Cieniowanie odrostu (root melt)", en: "Root melt" }, price: "od 180 zł" },
            { name: { pl: "Koloryzacja jednolita", en: "Single-tone colour" }, price: "od 150 zł" },
            { name: { pl: "Korekta koloru", en: "Colour correction" }, price: "wycena indyw." },
        ],
    },
    {
        id: "strzyzenie",
        icon: "✂️",
        title: { pl: "Strzyżenie & stylizacja", en: "Cuts & Styling" },
        desc: {
            pl: "Strzyżenia, modelowanie oraz upięcia i fryzury okolicznościowe na każdą okazję.",
            en: "Haircuts, blow-dry styling and occasion updos for any event.",
        },
        items: [
            { name: { pl: "Strzyżenie damskie", en: "Women's cut" }, price: "od 70 zł" },
            { name: { pl: "Strzyżenie męskie", en: "Men's cut" }, price: "od 50 zł" },
            { name: { pl: "Strzyżenie dziecięce", en: "Kids' cut" }, price: "od 40 zł" },
            { name: { pl: "Modelowanie / fen", en: "Blow-dry styling" }, price: "od 50 zł" },
            { name: { pl: "Upięcie okolicznościowe", en: "Occasion updo" }, price: "od 120 zł" },
            { name: { pl: "Fryzura ślubna + próba", en: "Bridal hair + trial" }, price: "od 250 zł" },
        ],
    },
    {
        id: "przedluzanie",
        icon: "💇‍♀️",
        title: { pl: "Przedłużanie włosów", en: "Hair Extensions" },
        desc: {
            pl: "Naturalne zagęszczanie i wydłużanie włosów metodą taśmową, keratynową i nano ringami.",
            en: "Natural volume and length with tape-in, keratin and nano-ring methods.",
        },
        items: [
            { name: { pl: "Konsultacja + dobór", en: "Consultation + matching" }, price: "gratis" },
            { name: { pl: "Metoda taśmowa", en: "Tape-in method" }, price: "od 600 zł" },
            { name: { pl: "Metoda keratynowa", en: "Keratin method" }, price: "od 800 zł" },
            { name: { pl: "Nano ringi", en: "Nano rings" }, price: "od 700 zł" },
            { name: { pl: "Korekta / przepięcie", en: "Maintenance / re-fit" }, price: "od 250 zł" },
        ],
    },
    {
        id: "kosmetyki",
        icon: "🧴",
        title: { pl: "Pielęgnacja & kosmetyki", en: "Care & Cosmetics" },
        desc: {
            pl: "Regeneracja, wygładzanie i nawilżanie włosów — Olaplex, botoks, keratyna i nanoplastia.",
            en: "Regeneration, smoothing and hydration — Olaplex, botox, keratin and nanoplastia.",
        },
        items: [
            { name: { pl: "Zabieg regenerujący Olaplex", en: "Olaplex regeneration" }, price: "od 90 zł" },
            { name: { pl: "Botoks na włosy", en: "Hair botox" }, price: "od 150 zł" },
            { name: { pl: "Keratynowe prostowanie", en: "Keratin straightening" }, price: "od 250 zł" },
            { name: { pl: "Nanoplastia", en: "Nanoplastia" }, price: "od 300 zł" },
            { name: { pl: "Nawilżanie i pielęgnacja", en: "Hydration & care" }, price: "od 80 zł" },
            { name: { pl: "Kosmetyki do domu", en: "Home-care products" }, price: "od 45 zł" },
        ],
    },
    {
        id: "brwi",
        icon: "👁️",
        title: { pl: "Brwi & rzęsy", en: "Brows & Lashes" },
        desc: {
            pl: "Stylizacja brwi i rzęs, która podkreśli spojrzenie — henna, laminacja i przedłużanie.",
            en: "Brow and lash styling that highlights your gaze — tint, lamination and extensions.",
        },
        items: [
            { name: { pl: "Regulacja i henna brwi", en: "Brow shaping & tint" }, price: "od 45 zł" },
            { name: { pl: "Laminacja brwi", en: "Brow lamination" }, price: "od 90 zł" },
            { name: { pl: "Lifting i laminacja rzęs", en: "Lash lift & lamination" }, price: "od 120 zł" },
            { name: { pl: "Przedłużanie rzęs", en: "Lash extensions" }, price: "od 150 zł" },
        ],
    },
    {
        id: "makijaz",
        icon: "💄",
        title: { pl: "Makijaż", en: "Makeup" },
        desc: {
            pl: "Makijaż dzienny, wieczorowy, okolicznościowy i ślubny dopasowany do okazji.",
            en: "Day, evening, occasion and bridal makeup tailored to the moment.",
        },
        items: [
            { name: { pl: "Makijaż dzienny", en: "Day makeup" }, price: "od 120 zł" },
            { name: { pl: "Makijaż wieczorowy", en: "Evening makeup" }, price: "od 160 zł" },
            { name: { pl: "Makijaż okolicznościowy", en: "Occasion makeup" }, price: "od 140 zł" },
            { name: { pl: "Makijaż ślubny + próbny", en: "Bridal makeup + trial" }, price: "od 350 zł" },
        ],
    },
];

// Booking configuration.
const BOOKING_CONFIG = {
    storageKey: "higirls_bookings",
    staffPin: "2468", // POC only — cosmetic gate, not real security.
    slotMinutes: 60,
    // Working windows per weekday (0 = Sunday). null means closed.
    workingHours: {
        0: null,
        1: { start: "09:00", end: "18:00" },
        2: { start: "09:00", end: "18:00" },
        3: { start: "09:00", end: "18:00" },
        4: { start: "09:00", end: "20:00" },
        5: { start: "09:00", end: "20:00" },
        6: { start: "09:00", end: "15:00" },
    },
};
