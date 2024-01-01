const burgerMenu = document.querySelector(".burger-menu");

function toggleNav() {
  burgerMenu.classList.toggle("active");
}

burgerMenu.addEventListener("click", toggleNav);
