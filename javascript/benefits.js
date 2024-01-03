const benefitData = [
  {
    title: "Unlimited services",
    icon: "../assets/graphics/infinity-light.svg",
    description:
      "Gain access to endless designs and development services. Simply put in a ticket in Trello to get started. Please be aware that each request is worked on and delivered one by one.",
  },
  {
    title: "Swift turnaround",
    icon: "../assets/graphics/infinity-light.svg",
    description:
      "Gain access to endless designs and development services. Simply put in a ticket in Trello to get started. Please be aware that each request is worked on and delivered one by one.",
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
