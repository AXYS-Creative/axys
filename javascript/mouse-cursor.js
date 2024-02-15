const cursor = document.querySelector(".mouse-cursor"),
  logo = document.querySelector(".logo"),
  menuBtn = document.querySelector(".menu-btn"),
  burger = document.querySelector(".burger"),
  mailForm = document.querySelector(".mail-form"),
  submitFormBtn = document.querySelector(".submit-btn"),
  emailUsLink = document.querySelector(".email-us-link");

const navLinks = document.querySelectorAll(".nav-link"),
  navFooterLinks = document.querySelectorAll(".nav-footer-link"),
  socialMediaLinks = document.querySelectorAll(".social-media-link"),
  cta1 = document.querySelectorAll(".cta-1"),
  cta2 = document.querySelectorAll(".cta-2"),
  workItems = document.querySelectorAll(".showcase-link"),
  benefitLinks = document.querySelectorAll(".benefit-link"),
  faqItems = document.querySelectorAll(".faq-item"),
  returnToTop = document.querySelectorAll(".return-to-top");

let followMouse = true;
cursor.style.opacity = 0; // Initially hide when loading the site

document.addEventListener("mousemove", (e) => {
  cursor.style.opacity = 1;

  if (followMouse) {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
  }
});

// Toggle vanish class to mouse cursor
const cursorHoverVanish = (elem) => {
  elem.addEventListener("mouseenter", () => {
    cursor.classList.add("vanish-mouse-cursor");
  });
  elem.addEventListener("mouseleave", () => {
    cursor.classList.remove("vanish-mouse-cursor");
  });
};

// Attaching vanish to individual elements
cursorHoverVanish(logo);
cursorHoverVanish(emailUsLink);
// Attaching events to NodeList items
[...cta1, ...workItems, ...benefitLinks, ...faqItems].forEach(
  cursorHoverVanish
);

// Toggle sibling selector (dot, icon, etc...)
const cursorHoverSibling = (elements, querySelector, activeClass) => {
  elements.forEach((element) => {
    element.addEventListener("mousemove", () => {
      followMouse = false;
      const sibling = element.querySelector(querySelector);
      const siblingRef = sibling.getBoundingClientRect();
      cursor.style.left = siblingRef.left + siblingRef.width / 2 + "px";
      cursor.style.top = siblingRef.top + siblingRef.height / 2 + "px";
      cursor.classList.add(activeClass);
    });

    element.addEventListener("mouseleave", () => {
      followMouse = true;
      cursor.classList.remove(activeClass);
    });
  });
};

cursorHoverSibling(navLinks, ".nav-link-svg", "nav-link-active");
cursorHoverSibling(navFooterLinks, ".icon", "nav-link-active");
cursorHoverSibling(cta2, ".dot", "cta2-active");
cursorHoverSibling(returnToTop, ".return-to-top-icon", "return-to-top-active");

socialMediaLinks.forEach((link) => {
  link.addEventListener("mousemove", () => {
    const linkRect = link.getBoundingClientRect();
    cursor.style.top = linkRect.top + linkRect.height / 2 + "px";
    cursor.style.left = linkRect.left + linkRect.width / 2 + "px";
    cursor.classList.add("social-link-active");
    followMouse = false;
  });

  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("social-link-active");
    followMouse = true;
  });
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

mailForm.addEventListener("mousemove", () => {
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
  followMouse = false;
});

submitFormBtn.addEventListener("mouseleave", () => {
  followMouse = true;
});

// Statement Section

const statementSection = document.querySelector("#statement-section");

statementSection.addEventListener(
  "mouseenter",
  () => (cursor.style.zIndex = -1)
);
statementSection.addEventListener(
  "mouseleave",
  () => (cursor.style.zIndex = 4)
);

const statementElements = [
  { word: ".statement-websites", icon: ".icon-globe" },
  { word: ".statement-a11y", icon: ".icon-person" },
  { word: ".statement-seo", icon: ".icon-magnifying-glass" },
];

const activateMouseIcon = (cursor, icon) => {
  cursor.classList.add("statement-active");
  icon.classList.add("active");
};

const deactivateMouseIcon = (cursor, icon) => {
  cursor.classList.remove("statement-active");
  icon.classList.remove("active");
};

statementElements.forEach(({ word, icon }) => {
  const statementElement = document.querySelector(word);
  const iconElement = document.querySelector(icon);

  statementElement.addEventListener("mousemove", () =>
    activateMouseIcon(cursor, iconElement)
  );
  statementElement.addEventListener("mouseleave", () =>
    deactivateMouseIcon(cursor, iconElement)
  );
});
