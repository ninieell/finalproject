
document.addEventListener('DOMContentLoaded', () => {
  let menuIcon = document.querySelector(".burger-menu");
  let  navbar = document.querySelector(".navbarr");

  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
});
});

