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

    return `0${yearFraction}.${millennium}`;
}

document.getElementById('modern-date').textContent = getModernDate();
document.getElementById('imperial-date').textContent = getImperialDate();