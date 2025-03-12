document.addEventListener('DOMContentLoaded', function() {
    const languageButton = document.getElementById('languageButton');
    const translations = {
        ru: {
            logo: 'Логотип отеля',
            about: 'Об отеле',
            rooms: 'Номера',
            services: 'Услуги',
            restaurant: 'Ресторан',
            actions: 'Акции',
            contacts: 'Контакты',
            phone: '+7 812 679-10-30',
            rating: 'Рейтинг отеля на Booking: 5.0 ⭐⭐⭐⭐⭐',
            bookButton: 'Забронировать',
            heroTitle: 'Отель в центре Петербурга «Far away» ',
            chooseHotel: 'Выберите отель',
            hotelFarAway: 'Отель «Far away»',
            hotelFarAwayLocation: 'Центр Петербурга',
            hotelFarAwayRating: 'Рейтинг: 5.0 ⭐⭐⭐⭐⭐',
            bookFarAway: 'Забронировать',
            detailsFarAway: 'Подробнее',
            hotelNeva: 'Отель «Neva»',
            hotelNevaLocation: 'Набережная Невы',
            hotelNevaRating: 'Рейтинг: 4.5 ⭐⭐⭐⭐☆',
            bookNeva: 'Забронировать',
            detailsNeva: 'Подробнее',
            restaurantFarAway: 'Ресторан «Far away»',
            roomCategories: 'Категории номеров',
            specialOffers: 'Специальные предложения',
            footerText: '&copy; 2024 Отель «Far away»',
            modalHotelName: 'Отель в центре Петербурга «Far away» ',
            checkinLabel: 'Дата заезда:',
            checkoutLabel: 'Дата выезда:',
            adultsLabel: 'Взрослые:',
            childrenLabel: 'Дети:',
            promoLabel: 'У меня есть промокод:',
            findButton: 'НАЙТИ'
        },
        en: {
            logo: 'Hotel Logo',
            about: 'About the hotel',
            rooms: 'Rooms',
            services: 'Services',
            restaurant: 'Restaurant',
            actions: 'Promotions',
            contacts: 'Contacts',
            phone: '+7 812 679-10-30',
            rating: 'Hotel rating on Booking: 5.0 ⭐⭐⭐⭐⭐',
            bookButton: 'Book',
            heroTitle: 'Hotel in the center of St. Petersburg «Far away» ',
            chooseHotel: 'Choose a hotel',
            hotelFarAway: 'Hotel «Far away»',
            hotelFarAwayLocation: 'Center of St. Petersburg',
            hotelFarAwayRating: 'Rating: 5.0 ⭐⭐⭐⭐⭐',
            bookFarAway: 'Book',
            detailsFarAway: 'Details',
            hotelNeva: 'Hotel «Neva»',
            hotelNevaLocation: 'Neva Embankment',
            hotelNevaRating: 'Rating: 4.5 ⭐⭐⭐⭐☆',
            bookNeva: 'Book',
            detailsNeva: 'Details',
            restaurantFarAway: 'Restaurant «Far away»',
            roomCategories: 'Room categories',
            specialOffers: 'Special offers',
            footerText: '&copy; 2024 Hotel «Far away»',
            modalHotelName: 'Hotel in the center of St. Petersburg «Far away» ',
            checkinLabel: 'Check-in date:',
            checkoutLabel: 'Check-out date:',
            adultsLabel: 'Adults:',
            childrenLabel: 'Children:',
            promoLabel: 'I have a promo code:',
            findButton: 'FIND'
        }
    };

    function changeLanguage(lang) {
        const elements = {
            logo: document.getElementById('logo'),
            about: document.getElementById('about'),
            rooms: document.getElementById('rooms'),
            services: document.getElementById('services'),
            restaurant: document.getElementById('restaurant'),
            actions: document.getElementById('actions'),
            contacts: document.getElementById('contacts'),
            phone: document.getElementById('phone'),
            rating: document.getElementById('rating'),
            bookButton: document.getElementById('bookButton'),
            heroTitle: document.getElementById('heroTitle'),
            chooseHotel: document.getElementById('chooseHotel'),
            hotelFarAway: document.getElementById('hotelFarAway'),
            hotelFarAwayLocation: document.getElementById('hotelFarAwayLocation'),
            hotelFarAwayRating: document.getElementById('hotelFarAwayRating'),
            bookFarAway: document.getElementById('bookFarAway'),
            detailsFarAway: document.getElementById('detailsFarAway'),
            hotelNeva: document.getElementById('hotelNeva'),
            hotelNevaLocation: document.getElementById('hotelNevaLocation'),
            hotelNevaRating: document.getElementById('hotelNevaRating'),
            bookNeva: document.getElementById('bookNeva'),
            detailsNeva: document.getElementById('detailsNeva'),
            restaurantFarAway: document.getElementById('restaurantFarAway'),
            roomCategories: document.getElementById('roomCategories'),
            specialOffers: document.getElementById('specialOffers'),
            footerText: document.getElementById('footerText'),
            modalHotelName: document.getElementById('modalHotelName'),
            checkinLabel: document.getElementById('checkinLabel'),
            checkoutLabel: document.getElementById('checkoutLabel'),
            adultsLabel: document.getElementById('adultsLabel'),
            childrenLabel: document.getElementById('childrenLabel'),
            promoLabel: document.getElementById('promoLabel'),
            findButton: document.getElementById('findButton')
        };

        for (const key in elements) {
            if (elements[key]) {
                elements[key].textContent = translations[lang][key];
            }
        }
    }

    languageButton.addEventListener('click', function() {
        if (languageButton.textContent === 'EN') {
            languageButton.textContent = 'RU';
            changeLanguage('en');
        } else {
            languageButton.textContent = 'EN';
            changeLanguage('ru');
        }
    });
});

function openBookingModal(hotelName) {
    const modal = document.getElementById('bookingModal');
    const hotelNameElement = document.getElementById('modalHotelName');
    hotelNameElement.textContent = `Отель «${hotelName}»`;
    modal.style.display = 'block';
}

function closeBookingModal() {
    document.getElementById('bookingModal').style.display = 'none';
}


window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
};
function openBookingModal(hotelName) {
    const modal = document.getElementById('bookingModal');
    const hotelNameElement = document.getElementById('modalHotelName');
    hotelNameElement.textContent = `Отель «${hotelName}»`;

    
    const hotelNameInput = document.getElementById('hotelName');
    if (hotelNameInput) {
        hotelNameInput.value = hotelName;
    }
    modal.style.display = 'block';
}


document.querySelector('.booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;

    if (checkin === '' || checkout === '') {
        alert('Пожалуйста, укажите даты заезда и выезда.');
        return;
    }

    if (new Date(checkin) >= new Date(checkout)) {
        alert('Дата заезда должна быть раньше даты выезда.');
        return;
    }

   
    alert('Форма отправлена (имитация). Даты: ' + checkin + ' - ' + checkout);
    closeBookingModal();
});
function openBookingModal(roomType) {
    const modal = document.getElementById('bookingModal');
    const hotelNameElement = document.getElementById('modalHotelName');
    
    hotelNameElement.textContent = `Отель «Far away» - ${roomType}`;

    
    const roomTypeInput = document.getElementById('roomType');
    if (roomTypeInput) {
        roomTypeInput.value = roomType;
    }
    modal.style.display = 'block';
}
const bookRestaurantButtons = document.querySelectorAll('.book-restaurant-button');

bookRestaurantButtons.forEach(button => {
    button.addEventListener('click', () => {
        const hotelName = button.dataset.hotel; // Получаем название отеля из атрибута data-hotel
        alert(`Забронировать столик в ресторане отеля «${hotelName}»!`);
        // Здесь можно добавить код для открытия формы бронирования
        // или перенаправления на страницу бронирования для выбранного отеля
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.slider-button.prev');
    const nextButton = document.querySelector('.slider-button.next');
    let slideIndex = 0;
    const slideWidth = slides[0].offsetWidth;

    console.log("Количество слайдов:", slides.length); // Проверяем, сколько слайдов найдено
    console.log("Ширина слайда:", slideWidth); // Проверяем ширину слайда

    function moveSlide() {
        console.log("Перемещаем слайд на индекс:", slideIndex); // Проверяем, какой слайд перемещается
        sliderContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    }

    prevButton.addEventListener('click', function() {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        moveSlide();
    });

    nextButton.addEventListener('click', function() {
        slideIndex = (slideIndex + 1) % slides.length;
        moveSlide();
    });
});









