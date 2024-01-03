const cursor = document.querySelector(".mouse-cursor"),
  logo = document.querySelector(".logo"),
  menuBtn = document.querySelector(".menu-btn"),
  burger = document.querySelector(".burger"),
  cta1 = document.querySelector(".cta-1"),
  cta2 = document.querySelector(".cta-2"),
  dot = cta2.querySelector(".dot"),
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

logo.addEventListener("mouseenter", () => {
  cursor.classList.add("logo-active");
});

logo.addEventListener("mouseleave", () => {
  cursor.classList.remove("logo-active");
});

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

cta1.addEventListener("mouseenter", () => {
  cursor.classList.add("cta1-active");
});

cta1.addEventListener("mouseleave", () => {
  cursor.classList.remove("cta1-active");
});

cta2.addEventListener("mouseenter", () => {
  followMouse = false;
  const dotRect = dot.getBoundingClientRect();
  cursor.style.left = dotRect.left + dotRect.width / 2 + "px";
  cursor.style.top = dotRect.top + dotRect.height / 2 + "px";
  cursor.classList.add("cta2-active");
});

cta2.addEventListener("mouseleave", () => {
  followMouse = true;
  cursor.classList.remove("cta2-active");
});

faqItems.forEach((item) => {
  item.addEventListener("mousemove", (e) => {
    const faqItemArrow = item
      .querySelector(".angle-arrow-wrapper")
      .getBoundingClientRect();
    cursor.style.top = faqItemArrow.top + faqItemArrow.height / 2 + "px";
    cursor.style.left = faqItemArrow.left + faqItemArrow.width / 2 + "px";
    cursor.classList.add("faq-item-active");
    followMouse = false;
  });

  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("faq-item-active");
    followMouse = true;
  });
});
