const grab = (element) => document.querySelector(element);
const grabAll = (array) => document.querySelectorAll(array);
const mqMaxXxl = window.matchMedia("(max-width: 1440px)");
const mqMaxMd = window.matchMedia("(max-width: 768px)");

const mainContent = grab(".main-content"),
  navMenu = grab(".nav-menu"),
  menuBtnWrapper = grab(".menu-btn-wrapper"),
  menuBtn = grab(".menu-btn"),
  menuNavlinks = grabAll(".menu-nav-link"),
  pageNavLinks = grabAll(".page-nav-link");

const toggleNav = () => {
  menuBtn.classList.toggle("active");
  const navLinks = navMenu.querySelectorAll("a");
  const pageLinks = document.querySelectorAll(".page-link");

  mainContent.classList.toggle("active");
  navMenu.classList.toggle("active");

  // Toggle menu visibility
  let expanded = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", !expanded);
  navMenu.setAttribute("aria-hidden", expanded);

  // Update tabIndex for navLinks based on menu visibility
  navLinks.forEach((link) => {
    link.setAttribute("tabindex", expanded ? "-1" : "0");
  });

  pageLinks.forEach((link) => {
    link.setAttribute("tabindex", !expanded ? "-1" : "0");
  });
};

const closeNav = () => {
  mainContent.classList.remove("active");
  navMenu.classList.remove("active");
  menuBtn.classList.remove("active");
};

menuNavlinks.forEach((link) => {
  link.addEventListener("click", closeNav);
});

menuBtn.addEventListener("click", toggleNav);

//
// Adjusting the window position on tab
// const tabElements = [
//   {
//     element: grab(".hero-cta-1"),
//     target: grab(".hero-btns"),
//     offset: mqMaxMd.matches ? 12 : mqMaxXxl.matches ? 56 : 80,
//   },
//   {
//     element: grab(".hero-cta-2"),
//     target: grab(".hero-btns"),
//     offset: mqMaxMd.matches ? 12 : mqMaxXxl.matches ? 56 : 80,
//   },
//   {
//     element: grab(".perks-cta-1"),
//     target: grab(".perks-btns"),
//     offset: mqMaxMd.matches ? 42 : mqMaxXxl.matches ? 68 : 80,
//   },
//   {
//     element: grab(".perks-cta-2"),
//     target: grab(".perks-btns"),
//     offset: mqMaxMd.matches ? 42 : mqMaxXxl.matches ? 68 : 80,
//   },
//   {
//     element: grab(".membership-first-link"),
//     target: grab(".membership-options"),
//     offset: mqMaxMd.matches ? -400 : mqMaxXxl.matches ? 48 : 100,
//   },
//   {
//     element: grab(".membership-last-link"),
//     target: grab(".membership-options"),
//     offset: mqMaxMd.matches ? 64 : mqMaxXxl.matches ? 48 : 100,
//   },
//   {
//     element: grab(".questions-first-link"),
//     target: grab(".questions-list"),
//     offset: mqMaxMd.matches ? 24 : mqMaxXxl.matches ? -24 : 80,
//   },
//   {
//     element: grab(".questions-cta-1"),
//     target: grab(".questions-btns"),
//     offset: mqMaxMd.matches ? 64 : mqMaxXxl.matches ? 96 : 210,
//   },
//   {
//     element: grab(".questions-cta-2"),
//     target: grab(".questions-btns"),
//     offset: mqMaxMd.matches ? 64 : mqMaxXxl.matches ? 96 : 210,
//   },
// ];

// This includes logic to differentiate between mouse(click:focus) and tab(focus)
const smartTabbing = (() => {
  let focusFromKeyboard = false;

  document.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      focusFromKeyboard = true;
    }
  });

  document.addEventListener("click", () => {
    focusFromKeyboard = false;
  });

  function sectionTabbing(triggerElement, offset) {
    if (!focusFromKeyboard) return;

    const elementPosition =
      triggerElement.getBoundingClientRect().top + window.pageYOffset;
    const viewportHeight = window.innerHeight;
    const desiredPosition =
      elementPosition - viewportHeight + triggerElement.offsetHeight + offset;

    window.scrollTo({ top: desiredPosition });
  }

  // tabElements.forEach((item) => {
  //   item.element.addEventListener("focus", () =>
  //     sectionTabbing(item.target, item.offset)
  //   );
  // });
})();
