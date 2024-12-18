const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const items = document.querySelectorAll(".block-card");
const burgMenu = document.querySelector(".header-burg-menu");
const close = document.querySelector(".header-burg-close");
const burgWrapper = document.querySelector(".header-burg-wrapper");
const burgList = document.querySelector(".header-burg-list");
const burgNav = document.querySelectorAll(".header-burg-nav>a");
let currentItem = 0;
const totalSlides = document.querySelectorAll(".block-card").length;

function showSlide(index) {
  items[currentItem].classList.remove("active");

  currentItem = (index + items.length) % items.length;
  items[currentItem].classList.add("active");
}
prevButton.addEventListener("click", () => {
  showSlide(currentItem - 1);
});
nextButton.addEventListener("click", () => {
  showSlide(currentItem + 1);
});

burgMenu.addEventListener("click", () => {
  if (burgList.style.display === "none" || burgList.style.display === "") {
    burgList.style.display = "block";
    burgWrapper.style.display = "none";
  } else {
    burgList.style.display = "none";
    burgWrapper.style.display = "flex";
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
