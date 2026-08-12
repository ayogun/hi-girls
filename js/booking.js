/*
 * Booking logic for the Hi Girls POC.
 * Appointments live in localStorage under BOOKING_CONFIG.storageKey.
 * The data model is shaped so it can later be pushed to a real backend
 * (each record has a stable id, an ISO createdAt and a source flag).
 */

const Booking = (() => {
    const KEY = BOOKING_CONFIG.storageKey;

    function load() {
        try {
            return JSON.parse(localStorage.getItem(KEY)) || [];
        } catch {
            return [];
        }
    }

    function save(list) {
        localStorage.setItem(KEY, JSON.stringify(list));
    }

    function all() {
        return load().sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
    }

    function upcoming() {
        const now = new Date();
        return all().filter((b) => new Date(`${b.date}T${b.time}`) >= new Date(now.getFullYear(), now.getMonth(), now.getDate()));
    }

    // A slot is taken when the same stylist is booked at the same date+time.
    // "any" never blocks a specific stylist and vice-versa in this simple POC.
    function isTaken({ date, time, stylist }) {
        return load().some(
            (b) => b.date === date && b.time === time && b.stylist === stylist
        );
    }

    function add(entry) {
        if (isTaken(entry)) return { ok: false, reason: "taken" };
        const list = load();
        const record = {
            id: `bk_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
            createdAt: new Date().toISOString(),
            status: "pending",
            ...entry,
        };
        list.push(record);
        save(list);
        return { ok: true, record };
    }

    function remove(id) {
        save(load().filter((b) => b.id !== id));
    }

    // Generate hourly slots for a given YYYY-MM-DD date from the working hours.
    function slotsForDate(dateStr) {
        if (!dateStr) return { closed: false, slots: [] };
        const day = new Date(`${dateStr}T00:00:00`).getDay();
        const window = BOOKING_CONFIG.workingHours[day];
        if (!window) return { closed: true, slots: [] };

        const [sh, sm] = window.start.split(":").map(Number);
        const [eh, em] = window.end.split(":").map(Number);
        const start = sh * 60 + sm;
        const end = eh * 60 + em;
        const step = BOOKING_CONFIG.slotMinutes;

        const now = new Date();
        const isToday = dateStr === toISODate(now);
        const nowMinutes = now.getHours() * 60 + now.getMinutes();

        const slots = [];
        for (let m = start; m + step <= end; m += step) {
            if (isToday && m <= nowMinutes) continue; // hide past hours today
            const hh = String(Math.floor(m / 60)).padStart(2, "0");
            const mm = String(m % 60).padStart(2, "0");
            slots.push(`${hh}:${mm}`);
        }
        return { closed: false, slots };
    }

    return { all, upcoming, isTaken, add, remove, slotsForDate };
})();

function toISODate(d) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
