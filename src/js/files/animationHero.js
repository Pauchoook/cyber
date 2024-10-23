export default function animationHero() {
  const imageShow = document.querySelector(".hero__bg--show");
  const hero = document.querySelector(".hero");
  if (imageShow) {
    animation();

    function animation() {
      setTimeout(() => {
        imageShow.classList.remove("opacity");
        imageShow.classList.add("opacity-none");
        setTimeout(() => {
          hero.classList.add("active");
          setTimeout(() => {
            imageShow.classList.remove("opacity-none");
            imageShow.classList.add("opacity");
            hero.classList.remove("active")
            setTimeout(() => animation(), 4000);
          }, 3000);
        }, 3000);
      }, 4000);
    }
  }
}
