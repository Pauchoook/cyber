export default function select() {
  const selects = document.querySelectorAll(".select");
  const buttons = document.querySelectorAll(".select__btn");
  if (buttons.length) {
    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();

        const currentSelect = btn.closest(".select");
        const currentInput = currentSelect.querySelector(".input-show");
        const currentButtons = currentSelect.querySelectorAll(".select__item-btn");

        if (currentSelect.classList.contains("open")) {
          handleClose();
        } else {
          selects.forEach((s) => s.classList.remove("open"));
          currentSelect.classList.add("open");

          currentSelect.addEventListener("click", (e) => e.stopPropagation());

          currentButtons.forEach((btnItem) => {
            btnItem.addEventListener("click", () => changeSelect(currentInput, btnItem.textContent, btn));
          });

          document.addEventListener("click", handleClose);
        }
      });
    });

    function handleClose() {
      const currentSelect = document.querySelector(".select.open");
      if (currentSelect) {
        currentSelect.classList.remove("open");
        document.removeEventListener("click", handleClose);
      }
    }

    function changeSelect(input, value, selectBtn) {
      input.value = value;
      selectBtn.querySelector("span").textContent = value;
      handleClose();
    }
  }
}
