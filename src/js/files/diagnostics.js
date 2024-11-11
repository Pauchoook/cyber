import { getDiagnostics, initDiagnostics, setDiagnostics } from "../help/diagnosticsStorage.js";

export default function diagnostics() {
  const diagnostics = document.querySelectorAll(".diagnostic");

  if (!getDiagnostics()) setDiagnostics({});

  if (diagnostics.length) {
    initDiagnostics(diagnostics);

    diagnostics.forEach((item) => {
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
          const diagnostics = getDiagnostics();

          if (target.classList.contains("simple-input-check")) {
            const currentTitle = target.nextElementSibling.querySelector(".diagnostic-title").textContent.trim();
            
            updateDiagnostic(diagnostics, currentTitle, "");
            if (target.checked) {
              updateDiagnostic(diagnostics, currentTitle, "");
            } else {
              deleteDiagnostic(diagnostics, currentTitle, "");
            }
          } else {
            const currentTitle = target.nextElementSibling.textContent.trim();
            const parentTitle = target
              .closest(".diagnostic")
              .querySelector(".diagnostic-title")?.textContent;

            if (target.classList.contains("main-input-check")) {
              // если главный чек
              selectedCount = 0;
              options.forEach((o) => {
                const currentTitle = o.nextElementSibling.textContent.trim();
                const parentTitle = o
                  .closest(".diagnostic")
                  .querySelector(".diagnostic-title").textContent;

                if (target.checked) {
                  o.checked = true;

                  updateDiagnostic(diagnostics, parentTitle, currentTitle);

                  selectedCount += 1;
                } else {
                  o.checked = false;
                  deleteDiagnostic(diagnostics, parentTitle, currentTitle);
                }
              });
            } else {
              if (target.checked) {
                updateDiagnostic(diagnostics, parentTitle, currentTitle);
                selectedCount += 1;
              } else {
                deleteDiagnostic(diagnostics, parentTitle, currentTitle);
                selectedCount -= 1;
              }

              if (selectedCount === options.length) mainInput.checked = true;
              else mainInput.checked = false;
            }
          }

          setDiagnostics(diagnostics);
          if (selected) selected.textContent = `Selected ${selectedCount} of ${options.length}`;
        }
      });
    });
  }
}

function updateDiagnostic(diagnostics, title, currentTitle) {
  if (diagnostics[title]) {
    diagnostics[title] = Array.from(new Set([...diagnostics[title], currentTitle]));
  } else {
    diagnostics[title] = [currentTitle];
  }
}

function deleteDiagnostic(diagnostics, title, currentTitle) {
  diagnostics[title] = diagnostics[title].filter((s) => s != currentTitle);

  if (diagnostics[title].length === 0) delete diagnostics[title];
}
