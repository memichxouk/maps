// Создание карты с использованием Leaflet.js
var map = L.map('map').setView([20, 0], 2); // Центрируем карту на мировом масштабе

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Данные исторических событий с координатами
const events = [
    {
        title: "Древний Египет",
        description: "Строительство пирамид и начало великой цивилизации в Египте.",
        coordinates: [26.8206, 30.8025],
        era: "Древний мир",
        culture: "Египет"
    },
    {
        title: "Римская Империя",
        description: "Падение Римской Империи в 476 году.",
        coordinates: [41.9028, 12.4964],
        era: "Античность",
        culture: "Римская"
    },
    {
        title: "Средневековье",
        description: "Коронация Карла Великого в 800 году.",
        coordinates: [48.8566, 2.3522],
        era: "Средневековье",
        culture: "Европейская"
    },
    {
        title: "Эпоха Ислама",
        description: "Пророк Мухаммед и распространение ислама.",
        coordinates: [21.4225, 39.8262],
        era: "Средневековье",
        culture: "Исламская"
    },
    {
        title: "Древний Китай",
        description: "Великая стена Китая и династия Цин.",
        coordinates: [39.9042, 116.4074],
        era: "Древний мир",
        culture: "Китайская"
    },
    {
        title: "Великая Французская революция",
        description: "Начало Великой Французской революции в 1789 году.",
        coordinates: [48.8566, 2.3522],
        era: "Новая история",
        culture: "Французская"
    },
    {
        title: "Битва при Ватерлоо",
        description: "Победа союзников в битве при Ватерлоо в 1815 году.",
        coordinates: [50.7167, 4.4167],
        era: "Новая история",
        culture: "Европейская"
    },
    {
        title: "Мартовская революция 1917 года",
        description: "Начало российской революции в 1917 году, свержение царизма.",
        coordinates: [55.7558, 37.6173],
        era: "Современная история",
        culture: "Российская"
    }
];

// Функция для отображения события на карте
events.forEach(event => {
    var marker = L.marker(event.coordinates).addTo(map);
    marker.bindPopup(`<b>${event.title}</b><br>${event.description}`).openPopup();

    // Добавляем анимацию вспышки при клике на маркер
    marker.on('click', function() {
        gsap.to(marker._icon, { duration: 0.5, scale: 1.5, repeat: 1, yoyo: true });
        
        // Отображаем информацию о событии
        displayEventInfo(event);
    });
});

// Функция для отображения информации о событии
function displayEventInfo(event) {
    var eventInfo = document.getElementById('event-info');
    var eventDetails = document.getElementById('event-details');
    eventDetails.innerHTML = `
        <strong>Эра:</strong> ${event.era}<br>
        <strong>Культура:</strong> ${event.culture}<br>
        <strong>Описание:</strong> ${event.description}
    `;
    eventInfo.classList.remove('hidden');
    eventInfo.style.display = 'block';

    // Плавный эффект появления информации
    gsap.fromTo(eventInfo, { opacity: 0 }, { opacity: 1, duration: 1 });
}

// Закрытие информации о событии
document.getElementById('close-info').addEventListener('click', function() {
    document.getElementById('event-info').style.display = 'none';
});
