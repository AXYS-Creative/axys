// prettier-ignore
export const mqMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
// prettier-ignore
export const mqReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Get Current Year for Copyright
const getCurrentYear = (() => {
  const yearText = document.querySelector(".year-text");
  const currentYear = new Date().getFullYear();

  yearText.innerHTML = currentYear;
})();

// For footer 'return to top' link
const handleReturnToTop = (() => {
  const returnToTop = document.querySelector(".return-to-top"),
    logo = document.querySelector(".logo");

  returnToTop.addEventListener("click", (e) => {
    logo.focus();
  });
})();

// Media Queries
// const minMediaMD = window.matchMedia("(min-width: 768px)");

// function handleMediaQueryChange(e) {
//   if (e.matches) {
//     console.log("The screen is big.");
//   } else {
//     console.log("The screen is small.");
//   }
// }

// minMediaMD.addEventListener("change", handleMediaQueryChange);

// handleMediaQueryChange(minMediaMD);

// // Social Media Post
// {
//   const allLinks = document.querySelectorAll("a");

//   allLinks.forEach((link) => {
//     link.removeAttribute("href");
//     link.style.cursor = "pointer";
//   });
// }
