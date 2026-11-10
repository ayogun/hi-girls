/*
 * Editable content for the Hi Girls website.
 * Everything a non-developer might want to change lives here:
 * team members, service categories, prices, stylists and tips.
 * Text fields hold both Polish (pl) and English (en) values.
 */

const SITE = {
    brand: "Hi Girls",
    bookingUrl: "https://saloner.pl/salon/hi-girls-7",
    tagline: { pl: "Specjaliści od blondu", en: "Blonde Specialists" },
    // TODO: replace the phone and social links below with the salon's real details.
    phone: "+48 538 423 793",
    email: "kontakt@higirls.pl",
    address: "aleja Marszałka Józefa Piłsudskiego 35/48, 06-500 Mława",
    mapsQuery: "aleja Marszałka Józefa Piłsudskiego 35, 06-500 Mława",
    social: {
        instagram: "https://instagram.com/higirls.hairsalon",
        facebook: "https://facebook.com/higirls.hairsalon",
    },
    // Where the "Blog" button sends visitors (social feed for now).
    blogUrl: "https://instagram.com/higirls.hairsalon",
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
    { id: "martyna", name: "Martyna", role: { pl: "Specjalistka Hi Girls", en: "Hi Girls specialist" }, photo: "assets/martyna.jpg" },
    { id: "paulina", name: "Paulina", role: { pl: "Specjalistka Hi Girls", en: "Hi Girls specialist" }, photo: "assets/paulina.jpg" },
    { id: "walentyna", name: "Walentyna", role: { pl: "Specjalistka Hi Girls", en: "Hi Girls specialist" }, photo: "assets/walentyna.jpg" },
    { id: "anna", name: "Anna", role: { pl: "Specjalistka Hi Girls", en: "Hi Girls specialist" }, photo: "assets/anna.jpg" },
];

// Stylists selectable in the booking form.
const STYLISTS = [
    { id: "any", name: { pl: "Dowolny specjalista", en: "Any specialist" } },
    ...TEAM.map((member) => ({ id: member.id, name: { pl: member.name, en: member.name } })),
];

// Service categories with individual services and prices (PLN).
const SERVICES = [
    {
        id: "koloryzacje",
        icon: "🎨",
        title: { pl: "Koloryzacje", en: "Coloring" },
        featured: true,
        from: { pl: "od 150 zł", en: "from 150 zł" },
        desc: {
            pl: "Blondy to nasza pasja. Koloryzacja, balayage, Airtouch i pielęgnacja dopasowane do Twoich włosów.",
            en: "Blonde is our passion. Colouring, balayage, Airtouch and care tailored to your hair.",
        },
        items: [
            { name: { pl: "Koloryzacja globalna + pielęgnacja", en: "Full colour + care" }, price: "280 - 330 zł" },
            { name: { pl: "Front Blond / Face Framing", en: "Front Blond / Face Framing" }, price: "300 - 400 zł" },
            { name: { pl: "Balayage + tonowanie", en: "Balayage + toning" }, price: "450 - 500 zł" },
            { name: { pl: "Airtouch + tonowanie", en: "Airtouch + toning" }, price: "600 - 800 zł" },
            { name: { pl: "Dekoloryzacja włosów farbowanych", en: "Colour removal for dyed hair" }, price: "400 - 800 zł" },
            { name: { pl: "Odrost + odświeżenie koloru", en: "Roots + colour refresh" }, price: "300 - 450 zł" },
            { name: { pl: "Tonowanie", en: "Toning" }, price: "150 - 230 zł" },
        ],
    },
    {
        id: "strzyzenie",
        icon: "✂️",
        title: { pl: "Stylizacja włosów", en: "Hair styling" },
        from: { pl: "od 100 zł", en: "from 100 zł" },
        desc: {
            pl: "Modelowanie oraz fryzury okolicznościowe i upięcia na ważne chwile.",
            en: "Blow-dry styling, occasion hairstyles and updos for special moments.",
        },
        items: [
            { name: { pl: "Modelowanie włosów", en: "Blow-dry styling" }, price: "100 - 180 zł" },
            { name: { pl: "Fryzura okolicznościowa / upięcie", en: "Occasion hairstyle / updo" }, price: "200 - 250 zł" },
        ],
    },
    {
        id: "przedluzanie",
        icon: "💇‍♀️",
        title: { pl: "Przedłużanie włosów", en: "Hair Extensions" },
        from: { pl: "konsultacja gratis", en: "free consultation" },
        desc: {
            pl: "Więcej długości i objętości. Konsultacja jest bezpłatna; ceny usług nie obejmują kosztu włosów.",
            en: "More length and volume. Consultation is free; service prices exclude the cost of hair.",
        },
        items: [
            { name: { pl: "Konsultacja przedłużania włosów", en: "Hair extensions consultation" }, price: "0 zł" },
            { name: { pl: "Przedłużanie włosów — usługa", en: "Hair extensions — service" }, price: "500 zł" },
            { name: { pl: "Zagęszczenie włosów — usługa", en: "Hair thickening — service" }, price: "250 - 300 zł" },
        ],
    },
    {
        id: "kosmetyki",
        icon: "🧴",
        title: { pl: "Pielęgnacja & kosmetyki", en: "Care & Cosmetics" },
        from: { pl: "od 130 zł", en: "from 130 zł" },
        desc: {
            pl: "Profesjonalna pielęgnacja i botoks na włosy. W salonie dostępne są także kosmetyki do domu.",
            en: "Professional hair care and hair botox. Home-care products are also available at the salon.",
        },
        items: [
            { name: { pl: "Pielęgnacja włosów", en: "Hair care" }, price: "130 zł" },
            { name: { pl: "Botoks", en: "Hair botox" }, price: "200 - 350 zł" },
        ],
    },
    {
        id: "brwi",
        icon: "👁️",
        title: { pl: "Brwi & rzęsy", en: "Brows & Lashes" },
        from: { pl: "od 120 zł", en: "from 120 zł" },
        desc: {
            pl: "Laminacja brwi i rzęs oraz farbowanie — osobno lub w pakiecie.",
            en: "Brow and lash lamination and tinting — individually or as a package.",
        },
        items: [
            { name: { pl: "Brwi — laminacja + farbowanie", en: "Brows — lamination + tinting" }, price: "120 zł" },
            { name: { pl: "Laminacja rzęs", en: "Lash lamination" }, price: "120 zł" },
            { name: { pl: "Pakiet laminacji brwi i rzęs + farbowanie", en: "Brow and lash lamination + tinting package" }, price: "220 zł" },
        ],
    },
    {
        id: "makijaz",
        icon: "💄",
        title: { pl: "Makijaż", en: "Makeup" },
        from: { pl: "od 120 zł", en: "from 120 zł" },
        desc: {
            pl: "Makijaż dzienny, wieczorowy, okolicznościowy i ślubny dopasowany do okazji.",
            en: "Day, evening, occasion and bridal makeup tailored to the moment.",
        },
        items: [
            { name: { pl: "Makijaż dzienny", en: "Day makeup" }, price: "120 zł" },
            { name: { pl: "Makijaż okolicznościowy", en: "Occasion makeup" }, price: "200 - 220 zł" },
            { name: { pl: "Makijaż ślubny", en: "Bridal makeup" }, price: "250 zł" },
            { name: { pl: "Makijaż próbny ślubny", en: "Bridal makeup trial" }, price: "200 zł" },
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

// Aggregate rating used for social proof (hero chip, testimonials header).
const RATING = {
    score: "5.0",
    source: { pl: "opinii Google", en: "Google reviews" },
};

// Headline numbers shown in the trust bar beneath the hero.
const STATS = [
    { value: "Blond", label: { pl: "nasza specjalność", en: "our specialty" } },
    { value: "Ty", label: { pl: "Twoje zadowolenie jest najważniejsze", en: "Your satisfaction comes first" } },
    { value: "5.0★", label: { pl: "ocena w Google", en: "Google rating" } },
    { value: "4", label: { pl: "specjalistki w zespole", en: "specialists on the team" } },
];

// "Why us" value propositions (icon keys resolve to inline SVG in main.js).
const VALUES = [
    {
        icon: "droplet",
        title: { pl: "Specjaliści od blondu", en: "Blonde specialists" },
        text: {
            pl: "Rozjaśnienia i koloryzacje bez zniszczonych włosów — zdrowy blond to nasza codzienność.",
            en: "Lightening and color without the damage — healthy blonde is our everyday craft.",
        },
    },
    {
        icon: "leaf",
        title: { pl: "Świadoma pielęgnacja", en: "Thoughtful care" },
        text: {
            pl: "Dbamy o kondycję włosów na każdym etapie — od koloryzacji po profesjonalną pielęgnację i rytuały.",
            en: "We care for your hair at every stage — from colouring to professional treatments and rituals.",
        },
    },
    {
        icon: "calendar",
        title: { pl: "Rezerwacja online 24/7", en: "24/7 online booking" },
        text: {
            pl: "Wybierz usługę i dostępny termin na naszej stronie Saloner — o dogodnej dla Ciebie porze.",
            en: "Choose a service and an available appointment on our Saloner page whenever it suits you.",
        },
    },
    {
        icon: "heart",
        title: { pl: "Indywidualne podejście", en: "A personal approach" },
        text: {
            pl: "Konsultacja przed każdą metamorfozą — efekt dopasowany do Ciebie i Twoich włosów.",
            en: "A consultation before every makeover — a result tailored to you and your hair.",
        },
    },
];

// Client testimonials shown in the reviews section.
const TESTIMONIALS = [
    {
        name: "Izabela Jankowska",
        service: { pl: "Opinia Google", en: "Google review" },
        quote: {
            pl: "Absolutnie wyjątkowe miejsce! Dziewczyny tworzą niesamowity klimat – od samego progu wita nas uśmiech, ciepła atmosfera i pełen profesjonalizm.Widać, że wkładają w to całe swoje serce i ogromną wiedzę. Z całego serca polecam każdemu, kto szuka fryzjera z pasją. Na pewno wrócę nie raz! ❤️",
            en: "An absolutely exceptional place! The girls create an amazing atmosphere – from the moment you step inside, you are greeted with a smile, warmth and complete professionalism. You can see they put their whole hearts and extensive knowledge into it. I wholeheartedly recommend it to anyone looking for a passionate hairdresser. I will definitely return more than once! ❤️",
        },
    },
    {
        name: "Magdalena Rutkowska",
        service: { pl: "Opinia Google", en: "Google review" },
        quote: {
            pl: "Świetne miejsce, w którym od wejścia czujesz się zaopiekowana. Indywidualne i profesjonalne podejście do klienta. Panie, które tam pracują znają się na rzeczy i robią cuda. Miła i przyjazna atmosfera połączona z perfekcją wykonania powoduje, że chce się tam wracać! Ja wrócę na pewno!🥰",
            en: "A wonderful place where you feel cared for from the moment you walk in. An individual and professional approach to each client. The women who work there know their craft and work wonders. The warm, friendly atmosphere combined with perfect workmanship makes you want to return! I certainly will!🥰",
        },
    },
    {
        name: "Malwina Michalak",
        service: { pl: "Opinia Google", en: "Google review" },
        quote: {
            pl: "Od samego wejścia do Hi Girls aż do wyjścia z salonu , klient jest w centrum uwagi, kobiety tam pracujące są przemiłe i bardzo pomocne w doborze odpowiedniej fryzury czy cięcia . Nowoczesny salon , personel dbający o każdy szczegół , klient jest częstowany po przyjściu kawą czy herbatą a także słodką przekąską z czym nie miałam do czynienia w żadnym odwiedzonym przezemnie salonie. 10 na 10 polecam 👍👍👍",
            en: "From entering Hi Girls to leaving the salon, the client is the centre of attention. The women working there are lovely and very helpful in choosing the right hairstyle or cut. A modern salon with staff who care about every detail. On arrival, clients are offered coffee or tea and a sweet snack, something I had not experienced in any other salon I have visited. 10 out of 10, highly recommended 👍👍👍",
        },
    },
];
