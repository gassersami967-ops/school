let menuBtn = document.getElementById("menuBtn");
let navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
