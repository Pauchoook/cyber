export function setBasket(object) {
  localStorage.setItem("basket", JSON.stringify(object));
}

export function getBasket() {
  return JSON.parse(localStorage.getItem("basket"));
}

export function initServices(services) {
  const basket = getBasket();

  services.forEach((item) => {
    let selectedCount = 0;
    const selected = item.querySelector(".services__spoller-content");
    const mainOption = item.querySelector(".main-input-check");
    const options = item.querySelector(".services__spoller-item")?.querySelectorAll(".input-check");

    options?.forEach((option) => {
      const currentTitle = option.nextElementSibling.textContent.trim();
      const parentTitle = option
        .closest(".service")
        .querySelector(".service-title").textContent;
      const isContains = basket[parentTitle]?.includes(currentTitle);

      if (isContains) {
        option.checked = true;
        selectedCount += 1;
      }

      if (selectedCount === options.length) mainOption.checked = true;
    });

    if (selected) selected.textContent = `Selected ${selectedCount} of ${options.length}`;
  });
}
