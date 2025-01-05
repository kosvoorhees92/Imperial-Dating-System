function getModernDate() {
    const now = new Date();
    return now.toLocaleString();
}

function getImperialDate() {
    const now = new Date();
    const year = now.getFullYear(); // Отримуємо поточний рік (наприклад, 2023)
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)); // День року (1-365)
    const hour = now.getHours(); // Поточний час (години)
    const determinedHour = dayOfYear * 24 + hour; // Загальна кількість годин з початку року
    const yearFraction = Math.floor(determinedHour * 0.11407955); // Розраховуємо Year Fraction (000-999)
    const millennium = Math.floor(year / 1000) + 1; // Розраховуємо Millennium (наприклад, 2023 -> M3)
    const imperialYear = year % 1000; // Отримуємо останні три цифри року (наприклад, 2023 -> 023)

    // Форматуємо Imperial Date: Year Fraction.Year.Millennium
    return `${String(yearFraction).padStart(3, '0')}.${String(imperialYear).padStart(3, '0')}.M${millennium}`;
}

function updateDateTime() {
    // Оновлюємо сучасну дату та час
    document.getElementById('modern-date').textContent = getModernDate();
    // Оновлюємо Imperial Date
    document.getElementById('imperial-date').textContent = getImperialDate();
}

// Оновлюємо дату та час кожну секунду (1000 мілісекунд)
setInterval(updateDateTime, 1000);

// Викликаємо функцію одразу, щоб уникнути затримки в 1 секунду при завантаженні сторінки
updateDateTime();
