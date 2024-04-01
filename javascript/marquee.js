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
  "samsara",
  "sitecore",
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

// const gsapMarquee = () => {
//   let currentScroll = 0;
//   let isScrollingDown = true;

//   let marqueeTween = gsap
//     .to(".marquee-inner", {
//       xPercent: -50,
//       repeat: -1,
//       duration: 4,
//       ease: "linear",
//     })
//     .totalProgress(0.5);

//   window.addEventListener("scroll", function () {
//     if (window.scrollY > currentScroll) {
//       isScrollingDown = true;
//     } else {
//       isScrollingDown = false;
//     }

//     gsap.to(marqueeTween, {
//       timeScale: isScrollingDown ? 1 : -1,
//     });

//     currentScroll = window.scrollY;
//   });
// };
