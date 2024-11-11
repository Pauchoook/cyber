export default function toggleSettingBook() {
  const toggleButtons = document.querySelectorAll(".toggle-book-btn");

  if (toggleButtons.length) {
    toggleButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const nextEl = btn.nextElementSibling;
        
        nextEl.classList.toggle("_active");
      })
    })
  }
} 