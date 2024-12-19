const prevButton = document.querySelector(".slider-prev");
const nextButton = document.querySelector(".slider-next");
const items = document.querySelectorAll(".block-card");
const burgMenu = document.querySelector(".header-burg-menu");
const close = document.querySelector(".header-burg-close");
const burgWrapper = document.querySelector(".header-burg-wrapper");
const burgList = document.querySelector(".header-burg-list");
const burgNav = document.querySelectorAll(".header-burg-nav>a");
const slides = document.getElementsByClassName("slider-card");
let disabledButtons = false;
let slideIndex = 0;

showSlider();

function showSlider() {
  for (let i = 0; i <= slides.length - 1; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "flex";
  slides[slideIndex].style.opacity = 1;
}

// The moveSlide function is responsible for moving between slides in a slider, applying fade-in and fade-in effects for a smooth visual transition. The feature also temporarily disables the navigation buttons during transitions to prevent multiple taps.

function moveSlide(moveNext) {
  disabledButtons = true;
  const activeSlide = slides[slideIndex];
  //Runs a fade-in animation for the active slide, gradually changing its transparency every 50 milliseconds.
  const fadeOutInterval = setInterval(fadeOut, 50, activeSlide);
  //After 500 milliseconds, the active slide is hidden (display: "none") and its transparency is reset to 0. The interval for the fade animation is cleared.
  setTimeout(() => {  
    activeSlide.style.display = "none";
    activeSlide.style.opacity = 0;
    clearInterval(fadeOutInterval);
  }, 500);
  if (moveNext) {
    slideIndex++;
  } else {
    slideIndex--;
  }
  if (!slides[slideIndex]) {
    if (moveNext) {
      slideIndex = 0;
    } else {
      slideIndex = slides.length - 1;
    }
  }
  const nextSlide = slides[slideIndex];
  nextSlide.style.opacity = 0;
  //After 500 milliseconds, the animation of the smooth appearance of the next slide is started (setInterval(fadeIn, 50, nextSlide)) and its display on flex is set.
  setTimeout(() => {
    const fadeInInterval = setInterval(fadeIn, 50, nextSlide);
    nextSlide.style.display = "flex";
    setTimeout(() => {//
      clearInterval(fadeInInterval);
      disabledButtons = false;
    }, 500);
  }, 500);
}

function fadeIn(slide) {
  if (slide.style.opacity > 1) {
    return;
  }
  slide.style.opacity = parseFloat(slide.style.opacity) + 0.1;
}

function fadeOut(slide) {
  if (slide.style.opacity < 0) {
    return;
  }
  slide.style.opacity -= 0.1;
}

prevButton.addEventListener("click", () => {
  if (!disabledButtons) {
    moveSlide(false);
  }
});

nextButton.addEventListener("click", () => {
  if (!disabledButtons) {
    moveSlide(true);
  }
});


burgMenu.addEventListener("click", () => {
  if (burgList.style.display === "none" || !burgList?.style?.display) {
    burgList.style.display = "block";
    burgWrapper.style.display = "none";
  } else {
    burgList.style.display = "none";
    burgWrapper.style.display = "none";
  }
});

close.addEventListener("click", () => {
  burgList.style.display = "none";
  burgWrapper.style.display = "flex";
});

burgNav.forEach((link) => {
  link.addEventListener("click", () => {
    burgList.style.display = "none";
    burgWrapper.style.display = "flex";
  });
});
