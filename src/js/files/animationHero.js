export default function animationHero() {
  const imageShow = document.querySelector(".hero__bg--show");
  if (imageShow) {
    animation();

    function animation() {
      setTimeout(() => {
        imageShow.classList.remove("opacity");
        imageShow.classList.add("opacity-none");
        setTimeout(() => {
          imageShow.classList.remove("opacity-none");
          imageShow.classList.add("opacity");
          setTimeout(() => animation(), 4000);
        }, 3000);
      }, 4000);
    }
  }
}
