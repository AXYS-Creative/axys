const questionsData = [
  {
    question: "What services do you offer?",
    answer:
      "We design and develop websites that leave positive impressions. We offer designs in a wide range of areas such as user experience (UX), graphics, motion, and interaction. We specialize in front-end development, accessibility, and search engine optimization.",
  },
  {
    question: "Why wouldn't I just hire a full-time creator?",
    answer:
      "To save money. The average annual salary for senior level designers and developers well exceeds 100k; and that's without including any benefits.\n \n With the monthly plan, you're simply paying for what you need. You can pause or resume anytime you're low on work.",
  },
  {
    question: "Do I have a limited number of requests?",
    answer:
      "No. Once you become a member, you can add as many design or development requests as you'd like. Keep in mind that they are worked on and delivered one by one.",
  },
  {
    question: "What if I only have a single request?",
    answer:
      "This is where the pause feature excels. Anytime your workload becomes light, we can pause your plan which stops all charges. Then you can easily start up again when you do need our services.",
  },
  {
    question: "How does the pause feature work?",
    answer:
      "When your workload becomes light, we can freeze your subscription and prevent all charges. Since memberships are billed monthly, we'll still be able to provide services for however many remaining days were left in the month when you paused. These days are acceptable for service anytime in the future!",
  },
  {
    question: "How quickly do you deliver?",
    answer:
      "This depends on the size and complexity of the project. Most single page, static sites can move from wireframe to launch in a few weeks; whereas multiple page sites, online shops, or other ambitious projects can take months.",
  },
  {
    question: "How do I make a request and track progress?",
    answer: `This is done with <a class='page-link faq-inner-link' href='https://trello.com/' target='_blank'>Trello <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path opacity="1" fill="#1E3050" d="M392.3 32H56.1C25.1 32 0 57.1 0 88c-.1 0 0-4 0 336 0 30.9 25.1 56 56 56h336.2c30.8-.2 55.7-25.2 55.7-56V88c.1-30.8-24.8-55.8-55.6-56zM197 371.3c-.2 14.7-12.1 26.6-26.9 26.6H87.4c-14.8 .1-26.9-11.8-27-26.6V117.1c0-14.8 12-26.9 26.9-26.9h82.9c14.8 0 26.9 12 26.9 26.9v254.2zm193.1-112c0 14.8-12 26.9-26.9 26.9h-81c-14.8 0-26.9-12-26.9-26.9V117.2c0-14.8 12-26.9 26.8-26.9h81.1c14.8 0 26.9 12 26.9 26.9v142.1z"/></svg></a>, a user-friendly managing tool that makes communication and collaboration simple. In addition to describing the work needed you can also upload images, videos, documents, or links to other resources.`,
  },
  {
    question: "Who are the designers and developers?",
    answer:
      "AXYS Creative is driven by only two people: Aaron and Bailey Garcia. This helps with quick decision making and promotes swift turn around. We can each handle the design and development aspect of the work.",
  },
  {
    question: "Are there limits to your services?",
    answer:
      "Yes. We currently don't offer development for social media type applications that required large data bases. We also don't develop mobile apps of any kind. Possibly in the future though!",
  },
  {
    question: "What if I'm unsatisfied with the work?",
    answer:
      "We'll continue to revise until you're happy and proud of the work. Simply put in a request and we'll get started on it.",
  },
  {
    question: "Do you offer refunds?",
    answer: "No. Please be aware that we don't offer any refunds at this time.",
  },
];

const faqList = document.querySelector(".faq-list");

let faqStr = "";

questionsData.forEach(({ question, answer, uniqueClass }, index) => {
  const formattedAnswer = answer.replace(/\n/g, "<br>");

  faqStr += `
              <div class="faq-item">
                <button class="question page-link ${uniqueClass}">
                    <h3>
                      <span class="question-indicator">Q.</span>
                      ${question}
                    </h3>
                    <div class="angle-arrow-wrapper magnet magnet-strong">
                      <svg class="angle-arrow" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path opacity="1" fill="#1E3050" d="M224 342.6l11.3-11.3 160-160L406.6 160 384 137.4l-11.3 11.3L224 297.4 75.3 148.7 64 137.4 41.4 160l11.3 11.3 160 160L224 342.6z"/></svg>
                    </div>
                </button>
                <div class="answer" id="answer-${index}">
                  <p>
                    <span class="answer-indicator">A.</span>
                    ${formattedAnswer}
                  </p>
                </div>
              </div>
          `;
});

faqList.innerHTML = faqStr;

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
