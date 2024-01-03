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
  {
    title: "Seamless management",
    icon: "../assets/graphics/user-check-light.svg",
    description:
      "Keeping track of progress is made easy with Trello. Simply sign in from your computer or phone to manage which tasks take priority over others. Watch as your requests are completed and delivered.",
  },
  {
    title: "Fixed monthly rate",
    icon: "../assets/graphics/tag-light.svg",
    description:
      "Don’t worry about inconsistent pricing that fluctuates throughout the year. Once signed up, your prices are locked in. If there are discounts offered you’re always eligible for those as well!",
  },
  {
    title: "Unlimited team members",
    icon: "../assets/graphics/user-plus-light.svg",
    description:
      "Need to add a team member to collaborate with? Just let us know and we can get them added to the Trello board. Then they’ll have access to submitting and tracking tickets.",
  },
  {
    title: "Cancel or resume anytime",
    icon: "../assets/graphics/play-pause-light.svg",
    description:
      "No contracts, ever. We understand that your workload can become light, so feel free to cancel. We also offer an easy to use “Pause” feature that freezes your account, preventing all charges and keeps your rate locked in.",
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
