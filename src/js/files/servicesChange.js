export default function servicesChange() {
  const buttonsItems = document.querySelectorAll(".all-services__item-btn");
  const items = document.querySelectorAll(".all-services__item");

  if (buttonsItems.length) {
    buttonsItems.forEach((btn) => {
      btn.addEventListener("click", () => {
        const parentItem = btn.closest(".all-services__item");

        if (parentItem.classList.contains("open")) {
          parentItem.classList.remove("open");
        } else {
          items.forEach((i) => i.classList.remove("open"));
          parentItem.classList.add("open");
        }
      });
    });
  }
}
