// prettier-ignore
export const mqMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
// prettier-ignore
export const mqReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Get Current Year for Copyright
(function getCurrentYear() {
  const yearText = document.querySelector(".year-text");
  const currentYear = new Date().getFullYear();

  yearText.innerHTML = currentYear;
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
