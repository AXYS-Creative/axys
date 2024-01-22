let mqMaxXxl = window.matchMedia("(max-width: 1440px)");
let mqMaxSm = window.matchMedia("(max-width: 480px)");
let mqMouse = window.matchMedia("(hover: hover)");

const heroGlitchText = () => {
  const dynamicText = document.querySelector(".dynamic-text");
  const words = [
    {
      word: "Creative", // Robust
      color: "#E48C66", // Coral
    },
    {
      word: "Accessible",
      color: "#A4D1A2", // Green
    },
    {
      word: "Responsive",
      color: "#7EC1D4", // Blue
    },
    {
      word: "Efficient", // Performant, Optimized, Innovative
      color: "#FBFAA2", // Yellow
    },
    {
      word: "Intuitive", // Secure, Agile, Reliable, Engaging
      color: "#E1A7B4", // Pink
    },
  ];

  let intervalId = null;

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let index = 0;

  function applyGlitchEffect(wordObj) {
    let glitchIterations = 0;
    const maxIterations = wordObj.word.length * 4;
    dynamicText.style.color = wordObj.color;

    const glitchInterval = setInterval(() => {
      dynamicText.innerText = wordObj.word
        .split("")
        .map((char, idx) => {
          if (glitchIterations / 3 > idx) {
            return char;
          }
          return characters[Math.floor(Math.random() * characters.length)];
        })
        .join("");

      glitchIterations++;
      if (glitchIterations >= maxIterations) {
        clearInterval(glitchInterval);
        dynamicText.innerText = wordObj.word;
      }
    }, 25);
  }

  function updateText() {
    applyGlitchEffect(words[index]);
    index = (index + 1) % words.length;
  }

  function startAnimation() {
    updateText();
    intervalId = setInterval(updateText, 4000);
  }

  function stopAnimation() {
    clearInterval(intervalId);
  }

  // Intersection Observer to check if element is in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startAnimation();
      } else {
        stopAnimation();
      }
    });
  });

  observer.observe(dynamicText);

  // Page Visibility API to check if user switches tabs
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      startAnimation();
    } else {
      stopAnimation();
    }
  });
};

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

if (mqMouse.matches) {
  const magnetEffect = () => {
    document.querySelectorAll(".magnet").forEach((el) =>
      el.addEventListener("mousemove", function (e) {
        const pos = this.getBoundingClientRect();
        const mx = e.clientX - pos.left - pos.width / 2;
        const my = e.clientY - pos.top - pos.height / 2;

        this.style.transform = `translate(${mx * 0.48}px, ${my * 0.48}px)`;

        if (this.classList.contains("magnet-weak")) {
          this.style.transform = `translate(${mx * 0.12}px, ${my * 0.12}px)`;
        }

        if (this.classList.contains("magnet-strong")) {
          this.style.transform = `translate(${mx * 0.96}px, ${my * 0.96}px)`;
        }

        if (this.classList.contains("magnet-wide-btn")) {
          this.style.transform = `translate(${mx * 0.48}px, ${my * 0.96}px)`;
        }
      })
    );

    document.querySelectorAll(".magnet").forEach((el) =>
      el.addEventListener("mouseleave", function () {
        this.style.transform = "translate(0, 0)";
      })
    );
  };

  magnetEffect();
}

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
