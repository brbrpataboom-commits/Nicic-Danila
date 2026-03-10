// Этот JavaScript файл добавляет интерактивность к портфолио-сайту: управление навигацией, плавную прокрутку, анимации и эффекты при скролле.

// Навигация
// Обработка клика по гамбургер-меню для открытия/закрытия мобильного меню
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Переключаем класс 'active' для анимации гамбургера
    navMenu.classList.toggle('active'); // Показываем/скрываем меню
});

// Закрываем меню навигации при клике на ссылку в мобильной версии
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Плавная прокрутка
// Добавляем плавную прокрутку ко всем ссылкам-якорям (начинающимся с #)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Предотвращаем стандартное поведение ссылки
        const target = document.querySelector(this.getAttribute('href')); // Находим целевой элемент
        if (target) {
            target.scrollIntoView({ // Прокручиваем к элементу плавно
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Эффект при скролле
// Добавляем тень к навигационной панели при прокрутке страницы вниз
const navBar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Если прокручено больше 50px
        navBar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)'; // Более сильная тень
    } else {
        navBar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)'; // Слабая тень по умолчанию
    }
});

// Интерактивные кнопки — прокрутка к нужным секциям
// Обработка кликов по кнопкам для прокрутки к соответствующим секциям
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('click', function(event) {
        const btnText = this.textContent.trim(); // Получаем текст кнопки
        let targetSelector = null;

        if (btnText === 'Связаться со мной') {
            targetSelector = '#contact'; // Ссылка на секцию контактов
        } else if (btnText === 'Мои проекты') {
            targetSelector = '#projects'; // Ссылка на секцию проектов
        }

        if (targetSelector) {
            const targetEl = document.querySelector(targetSelector);
            if (targetEl) {
                targetEl.scrollIntoView({ // Плавная прокрутка к секции
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Анимация при загрузке
// Добавляем анимации появления элементов главной секции при загрузке страницы
window.addEventListener('load', () => {
    const heroText = document.querySelector('.hero-text'); // Текстовый блок главной секции
    const heroImage = document.querySelector('.hero-image'); // Изображение профиля
    
    if (heroText) {
        heroText.style.opacity = '0'; // Скрываем элемент
        heroText.style.animation = 'fadeInUp 0.8s ease forwards'; // Запускаем анимацию снизу вверх
    }
    
    if (heroImage) {
        heroImage.style.opacity = '0'; // Скрываем элемент
        heroImage.style.animation = 'fadeInDown 0.8s ease forwards 0.2s'; // Запускаем анимацию сверху вниз с задержкой
    }
});

// Добавление CSS анимаций динамически
// Создаем и добавляем стили анимаций в head документа для плавного появления элементов
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp { // Анимация появления снизу вверх
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeInDown { // Анимация появления сверху вниз
        from {
            opacity: 0;
            transform: translateY(-30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style); // Добавляем стили в head



