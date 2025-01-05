function getModernDate() {
    const now = new Date();
    return now.toLocaleString();
}

function getImperialDate() {
    const now = new Date();
    const year = now.getFullYear();
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
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
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    // Розраховуємо загальну кількість секунд з початку року
    const totalSeconds = dayOfYear * 86400 + hour * 3600 + minute * 60 + second;

    // Розраховуємо Year Fraction (частина року)
    const yearFraction = Math.floor(totalSeconds / 31536); // 31536 = 86400 * 365 / 1000

    // Розраховуємо час у межах поточної частини року (Imperial Time)
    const imperialSeconds = totalSeconds % 31536;
    const imperialHours = Math.floor(imperialSeconds / 3600);
    const imperialMinutes = Math.floor((imperialSeconds % 3600) / 60);
    const imperialSecondsFinal = imperialSeconds % 60;

    // Форматуємо Imperial Time
    return `${String(yearFraction).padStart(3, '0')}:${String(imperialHours).padStart(2, '0')}:${String(imperialMinutes).padStart(2, '0')}:${String(imperialSecondsFinal).padStart(2, '0')}`;
}

function updateDateTime() {
    // Оновлюємо сучасну дату та час
    document.getElementById('modern-date').textContent = getModernDate();
    // Оновлюємо Imperial Date
    document.getElementById('imperial-date').textContent = getImperialDate();
    // Оновлюємо Imperial Time
    document.getElementById('imperial-time').textContent = getImperialTime();
    requestAnimationFrame(updateDateTime);
}

updateDateTime();
