const menuBtn = document.querySelector(".menu-btn");

function toggleNav() {
  menuBtn.classList.toggle("active");
}

menuBtn.addEventListener("click", toggleNav);
