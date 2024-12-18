// Отримуємо елементи кнопок "prev" і "next", всі елементи слайдів, бургер-меню та його елементи
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const items = document.querySelectorAll(".block-card");
const burgMenu = document.querySelector('.header-burg-menu');
const close = document.querySelector('.header-burg-close');
const burgWrapper = document.querySelector('.header-burg-wrapper');
const burgList = document.querySelector('.header-burg-list');
const burgNav = document.querySelectorAll('.header-burg-nav>a');

// Початковий індекс слайду
let slideIndex = 1;

// Функція для відображення слайдів
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("block-card");
  
  // Перевірка, чи не перевищує індекс кількість слайдів
  if (n > slides.length) {slideIndex = 1}
  // Перевірка, чи не менший індекс за 1
  if (n < 1) {slideIndex = slides.length}

  // Приховування всіх слайдів
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Відображення активного слайду
  slides[slideIndex-1].style.display = "flex";
}

// Функція для переміщення до наступного або попереднього слайду
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Функція для встановлення поточного слайду
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Додаємо обробник подій для кнопки "prev"
prevButton.addEventListener("click", () => {
  plusSlides(-1);
});

// Додаємо обробник подій для кнопки "next"
nextButton.addEventListener("click", () => {
  plusSlides(1);
});

// Ініціалізуємо слайдер з початковим значенням
showSlides(slideIndex);

// Додаємо обробник подій для бургер-меню
burgMenu.addEventListener('click', () => {
  if (burgList.style.display === 'none' || !burgList?.style?.display) {
    burgList.style.display = 'block';
    burgWrapper.style.display = 'none'; 
  } else {
    burgList.style.display = 'none';
    burgWrapper.style.display = 'none'; 
  }
});

// Додаємо обробник подій для кнопки закриття бургер-меню
close.addEventListener('click', () => {
  burgList.style.display = 'none';
  burgWrapper.style.display = 'flex'; 
});

// Додаємо обробник подій для кожного посилання в навігації бургер-меню
burgNav.forEach(link => {
  link.addEventListener('click', () => { 
    burgList.style.display = 'none'; 
    burgWrapper.style.display = 'flex'; 
  }); 
});
