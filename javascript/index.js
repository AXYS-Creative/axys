import "./nav.js";
import "./form.js";
import "./faqs.js";
import "./animations.js";
import "./mouse-cursor.js";
// import "./lenis.js"; // Screws with mouse div for some reason.

// Clear focus from any element on mousemove (remove button :focus styles)
(function clearFocusOnMouseMove() {
  function removeFocus() {
    if (
      document.activeElement &&
      !document.activeElement.classList.contains("input")
    ) {
      document.activeElement.blur();
    }
  }
  // Set up event listeners
  document.addEventListener("mousemove", removeFocus);
})();
