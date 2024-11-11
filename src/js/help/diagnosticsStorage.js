export function setDiagnostics(object) {
  localStorage.setItem("diagnostics", JSON.stringify(object));
}

export function getDiagnostics() {
  return JSON.parse(localStorage.getItem("diagnostics"));
}

export function initDiagnostics(diagnostics) {
  const diagnosticsStorage = getDiagnostics();

  diagnostics.forEach((item) => {
    let selectedCount = 0;
    const spollerItem = item.querySelector(".services__spoller-item");
    const selected = item.querySelector(".services__spoller-content");
    const mainOption = item.querySelector(".main-input-check");
    const options = spollerItem ? spollerItem.querySelectorAll(".input-check") : item.querySelectorAll(".simple-input-check");

    options?.forEach((option) => {
      if (option.classList.contains("simple-input-check")) {
        const currentTitle = option.nextElementSibling.querySelector(".diagnostic-title").textContent.trim();
        const isContains = diagnosticsStorage.hasOwnProperty(currentTitle);

        if (isContains) option.checked = true;
      } else {
        const currentTitle = option.nextElementSibling.textContent.trim();
        const parentTitle = option
          .closest(".diagnostic")
          .querySelector(".diagnostic-title").textContent;
        const isContains = diagnosticsStorage[parentTitle]?.includes(currentTitle);

        if (isContains) {
          option.checked = true;
          selectedCount += 1;
        }

        if (selectedCount === options.length) mainOption.checked = true;
      }
    });

    if (selected) selected.textContent = `Selected ${selectedCount} of ${options.length}`;
  });
}
