const faqList = document.querySelector(".faq-list");

if (faqList) {
  faqList.addEventListener("click", function (event) {
    const clickedElement = event.target;
    const isQuestionOrAnswer =
      clickedElement.closest(".question") || clickedElement.closest(".answer");

    if (isQuestionOrAnswer) {
      const faqItem = clickedElement.closest(".faq-item");
      toggleFAQItem(faqItem);
    }
  });

  function toggleFAQItem(faqItem) {
    faqItem.classList.toggle("active");

    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== faqItem) {
        item.classList.remove("active");
      }
    });
  }

  // Add event listeners for focus and blur events on .classic-link elements
  const classicLinks = document.querySelectorAll(".classic-link");

  classicLinks.forEach((link) => {
    link.addEventListener("focus", (event) => {
      const faqItem = event.target.closest(".faq-item");
      // Check if the faq-item is already active
      if (!faqItem.classList.contains("active")) {
        toggleFAQItem(faqItem);
      }
    });

    link.addEventListener("blur", (event) => {
      const faqItem = event.target.closest(".faq-item");
      faqItem.classList.remove("active");
    });
  });
}
