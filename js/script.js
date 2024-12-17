const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const items = document.querySelectorAll(".block-card");
let currentItem = 0;
const totalSlides = document.querySelectorAll('.block-card').length;

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

