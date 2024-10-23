export default function animationBanner() {
  const bannersItems = document.querySelectorAll(".banner__item");
  if (bannersItems.length) {
    let delayFirst = 10000;
    let delayLast = 20000;
    const bannerWrapper = document.querySelector(".banner__wrapper");
    let bannerWidth = 0;
    const windowWidth = document.body.clientWidth;

    bannersItems.forEach((item) => (bannerWidth += item.clientWidth));

    const offset = windowWidth - bannerWidth;

    if (window.matchMedia("(max-width: 600px)").matches) {
      delayFirst = 15000;
      delayLast = 30000;
    }

    bannerWrapper.style.transform = `translateX(${offset}px)`;
    animation();

    function animation() {
      setInterval(() => {
        bannerWrapper.style.transform = `translateX(0px)`;
      }, delayFirst)
      setInterval(() => {
        bannerWrapper.style.transform = `translateX(${offset}px)`;
      }, delayLast)
    }
  }
}
