const IMG_PATH = "../assets/graphics/company-logos/logo-";

const marqueeData = [
  "sunder",
  "github",
  "rainfocus",
  "salesforce",
  "ww",
  "arm",
  "akamai",
  "workday",
  "sap",
  "servicenow",
  "redgate",
  "fis",
  "blue-yonder",
  "snowflake",
];

const marqueeContainers = document.querySelectorAll(".marquee-inner-logos");

function updateMarquee(data) {
  const duplicatedData = data.concat(data);

  let marqueeContent = "";

  duplicatedData.forEach((business) => {
    marqueeContent += `
      <img src="${IMG_PATH + business}.svg" alt="${business}">
      <span class="marquee-dot" aria-hidden="true">•</span>
    `;
  });

  marqueeContainers.forEach((el) => (el.innerHTML = marqueeContent));
}

updateMarquee(marqueeData);
