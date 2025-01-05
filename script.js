// Функція для перевірки високосного року
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Функція для конвертації сучасної дати на Imperial Date
function convertToImperial() {
    const modernDateInput = document.getElementById('modern-date-input').value;
    if (!modernDateInput) {
        alert("Please enter a valid date.");
        return;
    }

    const now = new Date(modernDateInput + "T00:00:00"); // Додаємо час, щоб уникнути проблем із часовими поясами
    const year = now.getFullYear();
    const startOfYear = new Date(year, 0, 1); // Початок року (1 січня)
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

// Функції для відображення поточного часу
function getModernDate() {
    const now = new Date();
    return now.toLocaleString();
}

function getImperialDate() {
    const now = new Date();
    const year = now.getFullYear();
    const startOfYear = new Date(year, 0, 1); // Початок року (1 січня)
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
    const startOfYear = new Date(year, 0, 1); // Початок року (1 січня)
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
