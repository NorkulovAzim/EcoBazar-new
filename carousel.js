const clientsWrap = document.querySelector(".clients-wrap");
const cards = document.querySelectorAll(".clients-card");
const cardWidth = 424 + 24;
const visibleCards = 3;
const totalCards = cards.length;

let currentIndex = 0;

function updateCarousel() {
  const offset = -(currentIndex * cardWidth);
  clientsWrap.style.transform = `translateX(${offset}px)`;
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > totalCards - visibleCards) {
    currentIndex = 0;
  }
  updateCarousel();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalCards - visibleCards;
  }
  updateCarousel();
});
