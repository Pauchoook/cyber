export default function modal() {
  const buttonsModal = document.querySelectorAll(".btn-modal");

  if (buttonsModal.length) {
    buttonsModal.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();

        const modalId = btn.dataset.modal;
        handleOpenModal(modalId);
      });
    });
  }

  function handleOpenModal(modalId) {
    const currentModalOpen = document.querySelector(".modal.open");

    if (currentModalOpen) {
      currentModalOpen.classList.remove("open");
    }

    const currentModal = document.querySelector(`.modal[data-modal="${modalId}"]`);
    const modalWindow = currentModal.querySelector(".modal__window");
    const btnClose = currentModal.querySelector(".modal__close");

    modalTop(modalWindow);

    btnClose.addEventListener("click", handleCloseModal);

    document.addEventListener("click", handleCloseModal);
    modalWindow.addEventListener("click", (e) => e.stopPropagation());

    currentModal.classList.add("open");
    document.body.classList.add("body-hidden");
  }

  function modalTop(modalWindow) {
    if (window.matchMedia("(min-width: 768px)").matches) {
      const windowHeight = document.documentElement.clientHeight;
      const modalHeight = modalWindow.clientHeight;

      console.log(windowHeight)

      const offsetTop = (windowHeight - modalHeight) / 2;
      const marginTop = offsetTop > 20 ? `${offsetTop}px` : "50px";

      modalWindow.style.marginTop = marginTop;
    }
  }

  function handleCloseModal(e) {
    let currentModal = e.target.closest(".modal");

    if (!currentModal) currentModal = document.querySelector(".modal.open");

    currentModal.classList.add("hide");
    setTimeout(() => {
      document.body.classList.remove("body-hidden");
      currentModal.classList.remove("open");
      currentModal.classList.remove("hide");
    }, 500);

    return document.removeEventListener("click", handleCloseModal);
  }
}