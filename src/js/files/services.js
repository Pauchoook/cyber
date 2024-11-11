import { getBasket, initServices, setBasket } from "../help/basket.js";

export default function services() {
  const services = document.querySelectorAll(".service");

  if (!getBasket()) setBasket({});
  
  if (services.length) {
    initServices(services);

    services.forEach((item) => {
      const selected = item.querySelector(".selected");
      const mainInput = item.querySelector(".main-input-check");
      const options = item
        .querySelector(".services__spoller-item")
        ?.querySelectorAll(".input-check");

      let selectedCount = 0;
      //подсчет кол-ва выбранных услуг
      options?.forEach((o) => {
        if (o.checked) {
          selectedCount += 1;
        }
      });

      item.addEventListener("click", (e) => {
        const target = e.target;

        if (target.classList.contains("input-check")) {
          const basket = getBasket();
          const currentTitle = target.nextElementSibling.textContent.trim();
          const parentTitle = target
            .closest(".service")
            .querySelector(".service-title").textContent;

          if (target.classList.contains("main-input-check")) {
            // если главный чек
            selectedCount = 0;
            options.forEach((o) => {
              const currentTitle = o.nextElementSibling.textContent.trim();
              const parentTitle = o
                .closest(".service")
                .querySelector(".service-title").textContent;

              if (target.checked) {
                o.checked = true;

                updateService(basket, parentTitle, currentTitle);

                selectedCount += 1;
              } else {
                o.checked = false;
                deleteService(basket, parentTitle, currentTitle);
              }
            });
          } else {
            if (target.checked) {
              // добавление в корзину
              selectedCount += 1; // прибавляем  счетчик

              updateService(basket, parentTitle, currentTitle);

            } else {
              selectedCount -= 1; // убавляем счетчик
              
              // удаляем услугу из корзины
              deleteService(basket, parentTitle, currentTitle);
            }

            if (selectedCount === options.length) mainInput.checked = true;
            else mainInput.checked = false;
          }
          setBasket(basket); // обовляем корзину
          selected.textContent = `Selected ${selectedCount} of ${options.length}`;
        }
      });
    });
  }
}

function updateService(basket, title, currentTitle) {
  if (basket[title]) {
    basket[title] = Array.from(new Set([...basket[title], currentTitle]));
  } else {
    basket[title] = [currentTitle];
  }
}

function deleteService(basket, title, currentTitle) {
  basket[title] = basket[title].filter((s) => s != currentTitle);
}
