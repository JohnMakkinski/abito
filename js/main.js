var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    // Когда ширина экрана >= 768px
    768: {
      slidesPerView: 6, // Показываем 6 слайда
    },
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  thumbs: {
    swiper: swiper,
  },
});

const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".navbar-panel");
const menuCloseBtn = document.querySelector(".close-menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("is-open");
});

menuCloseBtn.addEventListener("click", () => {
  menu.classList.toggle("is-open");
});
