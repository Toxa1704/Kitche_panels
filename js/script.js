// Отримуємо елементи кнопок "prev" і "next", всі елементи слайдів, бургер-меню та його елементи
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const items = document.querySelectorAll(".block-card");
const burgMenu = document.querySelector(".header-burg-menu");
const close = document.querySelector(".header-burg-close");
const burgWrapper = document.querySelector(".header-burg-wrapper");
const burgList = document.querySelector(".header-burg-list");
const burgNav = document.querySelectorAll(".header-burg-nav>a");

let slideIndex = 0;

const slides = document.getElementsByClassName("block-card");
function showSlider() {
  for (let i = 0; i <= slides.length - 1; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "flex";
}
function moveSlide(moveNext) {
  slides[slideIndex].style.display = "none";
  if (moveNext) {
    slideIndex++;
  } else {
    slideIndex--;
  }
  if (!slides[slideIndex]) {
    if (moveNext) {
      slideIndex = 0;
    }else{
      slideIndex = slides.length - 1;
    }
  }
  slides[slideIndex].style.display = "flex";
}

function nextSlide() {
  moveSlide(true);
}
function prevSlide() {
  moveSlide(false);
}
prevButton.addEventListener("click", () => {
  prevSlide();
});

nextButton.addEventListener("click", () => {
  nextSlide();
});

// Ініціалізуємо слайдер з початковим значенням
showSlider();

// Додаємо обробник подій для бургер-меню
burgMenu.addEventListener("click", () => {
  if (burgList.style.display === "none" || !burgList?.style?.display) {
    burgList.style.display = "block";
    burgWrapper.style.display = "none";
  } else {
    burgList.style.display = "none";
    burgWrapper.style.display = "none";
  }
});

// Додаємо обробник подій для кнопки закриття бургер-меню
close.addEventListener("click", () => {
  burgList.style.display = "none";
  burgWrapper.style.display = "flex";
});

// Додаємо обробник подій для кожного посилання в навігації бургер-меню
burgNav.forEach((link) => {
  link.addEventListener("click", () => {
    burgList.style.display = "none";
    burgWrapper.style.display = "flex";
  });
});
