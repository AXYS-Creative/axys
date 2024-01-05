const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item, index) => {
  const questionButton = item.querySelector(".question");
  const answerDiv = item.querySelector(".answer");
  const angleArrow = item.querySelector(".angle-arrow");

  const toggleFAQItem = () => {
    faqItems.forEach((otherItem, otherIndex) => {
      if (otherIndex !== index) {
        otherItem.querySelector(".answer").classList.remove("active");
        otherItem.querySelector(".angle-arrow").classList.remove("active");
        otherItem.classList.remove("active");
      }
    });

    item.classList.toggle("active");
    answerDiv.classList.toggle("active");
    angleArrow.classList.toggle("active");
  };

  questionButton.addEventListener("click", toggleFAQItem);
  answerDiv.addEventListener("click", toggleFAQItem);
});
