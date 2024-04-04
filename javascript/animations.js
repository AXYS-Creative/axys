let mqMaxXxl = window.matchMedia("(max-width: 1440px)");
let mqMaxSm = window.matchMedia("(max-width: 480px)");

const glitchCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789?><:;";

function applyGlitchEffect({ element, text, iterations, color }) {
  let glitchIterations = 0;
  clearInterval(element.glitchInterval);

  if (color) {
    element.style.color = color;
  }

  const revealRate = iterations / text.length;

  element.glitchInterval = setInterval(() => {
    const glitchText = text
      .split("")
      .map((char, index) => {
        if (glitchIterations / revealRate > index) {
          return char;
        }

        return glitchCharacters.charAt(
          Math.floor(Math.random() * glitchCharacters.length)
        );
      })
      .join("");

    element.innerText = glitchText;

    if (glitchIterations >= iterations) {
      clearInterval(element.glitchInterval);
      element.innerText = text;
    }

    glitchIterations++;
  }, 25);
}

// Hero Glitch Text Function
function heroGlitchText() {
  const dynamicText = document.querySelector(".dynamic-text");
  const words = [
    { word: "Creative", color: "#E48C66" },
    { word: "Responsive", color: "#7EC1D4" },
    { word: "Accessible", color: "#A4D1A2" },
    { word: "Innovative", color: "#FBFAA2" },
    { word: "Engaging", color: "#E1A7B4" },
  ];

  let index = 0;

  function updateText() {
    const wordObj = words[index];
    applyGlitchEffect({
      element: dynamicText,
      text: wordObj.word,
      iterations: wordObj.word.length * 4,
      color: wordObj.color,
    });

    index = (index + 1) % words.length;
  }

  updateText();
  setInterval(updateText, 4000);
}

heroGlitchText();

//

const scrollAnimations = () => {
  function throttle(func, limit) {
    let lastFunc;
    let lastRan;

    return function () {
      const context = this;
      const args = arguments;

      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function () {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  }

  function isElementInView(element, offset = 0) {
    const rect = element.getBoundingClientRect();

    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    const isTopInView = rect.top <= windowHeight - offset;
    const isBottomPassedTop = rect.top < 0 + offset;
    return isTopInView && !isBottomPassedTop;
  }

  let pixelSpacer = 80;

  if (mqMaxXxl.matches) {
    pixelSpacer = 64;
  } else if (mqMaxSm.matches) {
    pixelSpacer = 32;
  }

  const handleScroll = () => {
    document.querySelectorAll(".scroll-animate").forEach((el) => {
      if (isElementInView(el, pixelSpacer)) {
        el.classList.add("animate");
      } else {
        el.classList.remove("animate");
      }
    });
  };

  // Adjust the throttle with the second argument below. The smaller the number, the quicker the function calls (milliseconds)
  const throttledScroll = throttle(handleScroll, 100);
  window.addEventListener("scroll", throttledScroll);
};

scrollAnimations();

//

if (mqMaxSm.matches) {
  let siteHeader = document.querySelector(".site-header");

  const scrollFromTop = () => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 120) {
        siteHeader.classList.add("away-from-top");
      } else {
        siteHeader.classList.remove("away-from-top");
      }
    });
  };

  scrollFromTop();
}
