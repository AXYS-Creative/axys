const cursor = document.querySelector(".mouse-cursor"),
  logo = document.querySelector(".logo"),
  menuBtn = document.querySelector(".menu-btn"),
  burger = document.querySelector(".burger"),
  cta1 = document.querySelectorAll(".cta-1"),
  cta2 = document.querySelectorAll(".cta-2"),
  workItems = document.querySelectorAll(".showcase-link"),
  mailForm = document.querySelector(".mail-form"),
  submitFormBtn = document.querySelector(".submit-btn"),
  faqItems = document.querySelectorAll(".faq-item");

let followMouse = true;
cursor.style.opacity = 0; // Initially hide when loading the site

document.addEventListener("mousemove", function (e) {
  cursor.style.opacity = 1;

  if (followMouse) {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
  }
});

// Toggle vanish class to mouse cursor
const addCursorEvents = (elem) => {
  elem.addEventListener("mouseenter", () => {
    cursor.classList.add("vanish-mouse-cursor");
  });
  elem.addEventListener("mouseleave", () => {
    cursor.classList.remove("vanish-mouse-cursor");
  });
};

// Attach events to individual elements
addCursorEvents(logo);
// Attach events to NodeList items
[...cta1, ...workItems, ...faqItems].forEach(addCursorEvents);

menuBtn.addEventListener("mousemove", () => {
  const burgerRect = burger.getBoundingClientRect();
  cursor.style.top = burgerRect.top + burgerRect.height / 2 + "px";
  cursor.style.left = burgerRect.left + burgerRect.width / 2 + "px";
  cursor.classList.add("burger-active");
  followMouse = false;
});

menuBtn.addEventListener("mouseleave", () => {
  cursor.classList.remove("burger-active");
  followMouse = true;
});

cta2.forEach((cta) => {
  cta.addEventListener("mouseenter", () => {
    followMouse = false;
    const dot = cta.querySelector(".dot");
    const dotRect = dot.getBoundingClientRect();
    cursor.style.left = dotRect.left + dotRect.width / 2 + "px";
    cursor.style.top = dotRect.top + dotRect.height / 2 + "px";
    cursor.classList.add("cta2-active");
  });

  cta.addEventListener("mouseleave", () => {
    followMouse = true;
    cursor.classList.remove("cta2-active");
  });
});

mailForm.addEventListener("mouseenter", () => {
  followMouse = false;
  const submitBtnRect = submitFormBtn.getBoundingClientRect();
  cursor.style.left = submitBtnRect.left + submitBtnRect.width / 2 + "px";
  cursor.style.top = submitBtnRect.top + submitBtnRect.height / 2.2 + "px";
  cursor.classList.add("mail-form-active");
});

mailForm.addEventListener("mouseleave", () => {
  followMouse = true;
  cursor.classList.remove("mail-form-active");
});

submitFormBtn.addEventListener("mousemove", () => {
  const submitBtnRect = submitFormBtn.getBoundingClientRect();
  cursor.style.left = submitBtnRect.left + submitBtnRect.width / 2 + "px";
  cursor.style.top = submitBtnRect.top + submitBtnRect.height / 2.2 + "px";
  // cursor.classList.add("burger-active");
  followMouse = false;
});

submitFormBtn.addEventListener("mouseleave", () => {
  // cursor.classList.remove("burger-active");
  followMouse = true;
});
