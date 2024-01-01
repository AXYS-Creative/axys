const cursor = document.querySelector(".mouse-cursor");

let followMouse = true;
cursor.style.opacity = 0; // Initially hide when loading the site

document.addEventListener("mousemove", function (e) {
  cursor.style.opacity = 1;

  if (followMouse) {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
  }
});
