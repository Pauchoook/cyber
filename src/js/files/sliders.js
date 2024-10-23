import Swiper from "swiper";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

export default function sliders() {
  const projectsSlider = document.querySelector(".projects__slider");
  if (projectsSlider) {
    const swiper = new Swiper(projectsSlider, {
      speed: 1000,
      modules: [Pagination, Autoplay, Navigation],
      grabCursor: true,
      slidesPerView: "auto",
      loop: true,
      simulateTouch: false,
      centeredSlides: true,
      autoplay: {
        delay: 3000
      },
      navigation: {
        nextEl: ".projects .slider-nav__btn--next",
        prevEl: ".projects .slider-nav__btn--prev"
      },
      pagination: {
        el: ".projects__slider-pagination"
      },
    });
  }
}