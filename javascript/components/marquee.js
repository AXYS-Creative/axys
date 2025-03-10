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
  "blueyonder",
  "snowflake",
  "samsara",
  "sitecore",
  "gartner",
  "cyberark",
  "rsna",
  "zscaler",
];

const marqueeContainers = document.querySelectorAll(".marquee-inner-logos");

function updateMarquee(data) {
  const duplicatedData = data.concat(data);

  let marqueeContent = "";

  duplicatedData.forEach((business) => {
    marqueeContent += `
          <img src="${IMG_PATH + business}.svg" 
            alt="${business}" 
            class="marquee-img" 
            loading="lazy"
            >
          <span class="marquee-dot" aria-hidden="true">•</span>
        `;
  });

  marqueeContainers.forEach((el) => (el.innerHTML = marqueeContent));
}

updateMarquee(marqueeData);

let currentScroll = 0;

function initializeMarquee(selector, duration) {
  if (gsap) {
    return gsap.utils.toArray(selector).map((elem) =>
      gsap
        .to(elem, {
          xPercent: -50,
          repeat: -1,
          duration: duration,
          ease: "linear",
        })
        .totalProgress(0.5)
    );
  }
}

window.addEventListener("scroll", () => {
  const isScrollingDown = window.scrollY > currentScroll;

  function adjustTimeScale(tweens) {
    tweens.forEach((tween, index) =>
      gsap.to(tween, {
        timeScale: (index % 2 === 0) === isScrollingDown ? 1 : -1,
      })
    );
  }

  adjustTimeScale(marqueeTweens);
  adjustTimeScale(marqueeTweensLogos);

  currentScroll = window.scrollY;
});

const marqueeTweens = initializeMarquee(
  ".marquee-inner",
  window.innerWidth > 768 ? 16 : 10
);
const marqueeTweensLogos = initializeMarquee(
  ".marquee-inner-logos",
  window.innerWidth > 768 ? 40 : 32
);
