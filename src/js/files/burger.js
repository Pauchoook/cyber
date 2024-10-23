export default function burger() {
  const burgerOpen = document.querySelector("#burger-open");
  const burgerClose = document.querySelector("#burger-close");
  const burger = document.querySelector("#burger");

  burgerOpen.addEventListener("click", (e) => {
    e.stopPropagation();

    if (burger.classList.contains("open")) {
      handleClose();
    } else {
      burger.classList.add("open");
      
      document.body.classList.add("body-hidden");
      burgerClose.classList.add("active");
      burger.addEventListener("click", (e) => e.stopPropagation());

      burgerClose.addEventListener("click", handleClose);
      document.body.addEventListener("click", handleClose);
    }
  });

}
export function handleClose() {
  const burger = document.querySelector("#burger");
  const burgerClose = document.querySelector("#burger-close");

  burger.classList.remove("open");

  document.body.classList.remove("body-hidden");
  burgerClose.classList.remove("active");

  document.body.removeEventListener("click", handleClose);
}