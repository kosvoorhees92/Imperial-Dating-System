// Функція для конвертації сучасної дати на Imperial Date
function convertToImperial() {
    const modernDateInput = document.getElementById('modern-date-input').value;
    if (!modernDateInput) {
        alert("Please enter a valid date.");
        return;
    }

    const now = new Date(modernDateInput);
    const year = now.getFullYear();
    const startOfYear = new Date(year, 0, 0); // Початок року
    const diff = now - startOfYear; // Різниця в мілісекундах
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24)); // День року
    const hour = now.getHours();
    const determinedHour = dayOfYear * 24 + hour; // Загальна кількість годин з початку року
    const yearFraction = Math.floor(determinedHour * 0.11407955); // Year Fraction
    const millennium = Math.floor(year / 1000) + 1; // Millennium
    const imperialYear = year % 1000; // Останні три цифри року

    const imperialDate = `${String(yearFraction).padStart(3, '0')}.${String(imperialYear).padStart(3, '0')}.M${millennium}`;
    document.getElementById('converted-imperial-date').textContent = imperialDate;
}

// Функція для конвертації Imperial Date на сучасну дату
function convertToModern() {
    const imperialDateInput = document.getElementById('imperial-date-input').value;
    if (!imperialDateInput || !/^\d{3}\.\d{3}\.M\d{1,2}$/.test(imperialDateInput)) {
        alert("Please enter a valid Imperial Date (e.g., 549.023.M3).");
        return;
    }

    const [yearFraction, year, millennium] = imperialDateInput.split(/\.|M/);
    const yearFractionNumber = parseInt(yearFraction, 10);
    const yearNumber = parseInt(year, 10);
    const millenniumNumber = parseInt(millennium, 10);

    // Розраховуємо рік у сучасному форматі
    const modernYear = (millenniumNumber - 1) * 1000 + yearNumber;

    // Розраховуємо загальну кількість секунд з початку року
    const totalSeconds = yearFractionNumber * 31536; // 31536 = 86400 * 365 / 1000

    // Розраховуємо день року та час
    const dayOfYear = Math.floor(totalSeconds / 86400); // Дні
    const hour = Math.floor((totalSeconds % 86400) / 3600); // Години
    const minute = Math.floor((totalSeconds % 3600) / 60); // Хвилини
    const second = totalSeconds % 60; // Секунди

    // Створюємо об'єкт Date
    const modernDate = new Date(modernYear, 0); // Початок року
    modernDate.setDate(modernDate.getDate() + dayOfYear); // Додаємо дні
    modernDate.setHours(hour, minute, second); // Додаємо час

    document.getElementById('converted-modern-date').textContent = modernDate.toLocaleString();
}

// Функції для відображення поточного часу
function getModernDate() {
    const now = new Date();
    return now.toLocaleString();
}

function getImperialDate() {
    const now = new Date();
    const year = now.getFullYear();
    const startOfYear = new Date(year, 0, 0);
    const diff = now - startOfYear;
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hour = now.getHours();
    const determinedHour = dayOfYear * 24 + hour;
    const yearFraction = Math.floor(determinedHour * 0.11407955);
    const millennium = Math.floor(year / 1000) + 1;
    const imperialYear = year % 1000;

    return `${String(yearFraction).padStart(3, '0')}.${String(imperialYear).padStart(3, '0')}.M${millennium}`;
}

function getImperialTime() {
    const now = new Date();
    const year = now.getFullYear();
    const startOfYear = new Date(year, 0, 0);
    const diff = now - startOfYear;
    const totalSeconds = Math.floor(diff / 1000);
    const yearFraction = Math.floor(totalSeconds / 31536);
    const imperialSeconds = totalSeconds % 31536;
    const imperialHours = Math.floor(imperialSeconds / 3600);
    const imperialMinutes = Math.floor((imperialSeconds % 3600) / 60);
    const imperialSecondsFinal = imperialSeconds % 60;

    return `${String(yearFraction).padStart(3, '0')}:${String(imperialHours).padStart(2, '0')}:${String(imperialMinutes).padStart(2, '0')}:${String(imperialSecondsFinal).padStart(2, '0')}`;
}

function updateDateTime() {
    document.getElementById('modern-date').textContent = getModernDate();
    document.getElementById('imperial-date').textContent = getImperialDate();
    document.getElementById('imperial-time').textContent = getImperialTime();
    requestAnimationFrame(updateDateTime);
}

updateDateTime();
