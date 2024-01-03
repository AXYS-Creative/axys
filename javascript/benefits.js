const benefitData = [
  {
    title: "Unlimited services",
    icon: "../assets/graphics/infinity-light.svg",
    description:
      "Gain access to endless designs and development services. Simply put in a ticket in Trello to get started. Please be aware that each request is worked on and delivered one by one.",
  },
  {
    title: "Swift turnaround",
    icon: "../assets/graphics/rotate-right-light.svg",
    description:
      "Get designs or sections of your website generally within 2-3 business days (M-F). Please be aware that full websites can take weeks or even months to complete depending on their size and complexity.",
  },
];

const benefitList = document.querySelector(".benefit-list");

benefitData.forEach(({ title, icon, description }, index) => {
  fetch(icon)
    .then((response) => response.text())
    .then((svg) => {
      benefitList.innerHTML += `
          <div class="benefit-block benefit-block-${index + 1}">
            <h3 class="benefit-header">
              ${svg}
              ${title}
            </h3>
            <p>${description}</p>
          </div>
        `;
    });
});
