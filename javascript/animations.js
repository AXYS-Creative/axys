gsap.registerPlugin(ScrollTrigger);

// Global - Everything Glitchy
const allGlitchEffects = (() => {
  const glitchCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789?";

  let responsiveGsap = gsap.matchMedia();

  responsiveGsap.add(
    {
      maxMd: "(max-width: 768px)",
      maxLg: "(max-width: 1024px)",
      maxXl: "(max-width: 1200px)",
      minMd: "(min-width: 769px)",
    },
    (context) => {
      let { maxMd, maxLg, maxXl, minMd } = context.conditions;

      //
      // Hero Glitch Text Function
      const applyHeroGlitch = ({ element, text, iterations, color }) => {
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
        }, 16);
      };

      // Not on other pages
      const dynamicText = document.querySelector(".dynamic-text");
      if (dynamicText) {
        const words = [
          { word: "Creative", color: "#E48C66" },
          { word: "Responsive", color: "#7EC1D4" },
          { word: "Accessible", color: "#A4D1A2" },
          { word: "Innovative", color: "#FBFAA2" },
          { word: "Engaging", color: "#E1A7B4" },
        ];

        let index = 0;

        const updateText = () => {
          const wordObj = words[index];
          applyHeroGlitch({
            element: dynamicText,
            text: wordObj.word,
            iterations: wordObj.word.length * 4,
            color: wordObj.color,
          });

          index = (index + 1) % words.length;
        };

        updateText();
        setInterval(updateText, 2800);
      }

      //
      // Reusable Glitch function + it's accessbile for reduced motion
      const singleGlitch = (element, originalText) => {
        // Skip for a11y - reduced motion
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          element.innerText = originalText;
          return;
        }

        let iterations = 0;
        const glitchInterval = setInterval(() => {
          element.innerText = originalText
            .split("")
            .map((char, index) => {
              if (index < iterations) {
                return originalText[index];
              }
              return glitchCharacters[Math.floor(Math.random() * 32)];
            })
            .join("");

          if (iterations >= originalText.length) {
            clearInterval(glitchInterval);
          }

          iterations += 1 / 8;
        }, 16);
      };

      const applyScrollGlitch = (() => {
        const glitchTitles = document.querySelectorAll(".scroll-glitch");
        const glitchTitlesTargets = document.querySelectorAll(
          ".scroll-glitch-target"
        );

        glitchTitles.forEach((el, index) => {
          const originalText = el.getAttribute("data-title");
          const target = glitchTitlesTargets[index];

          gsap.to(el, {
            scrollTrigger: {
              trigger: target,
              toggleActions: "play none play none",
              start: "top bottom",
              end: "bottom top",
              onEnter: () => singleGlitch(el, originalText),
              onLeave: () => singleGlitch(el, originalText),
              onEnterBack: () => singleGlitch(el, originalText),
              onLeaveBack: () => singleGlitch(el, originalText),
            },
          });
        });
      })();

      const responsiveScrollGlitch = (() => {
        const responsiveItems = [
          {
            element: ".responsive-glitch-element__benefits",
            target: ".responsive-glitch-target__benefits",
            targetLg: ".responsive-glitch-target__benefits-lg",
            start: "top 72%",
            end: "bottom 36%",
            startLg: "top bottom",
            endLg: "bottom top",
          },
        ];

        responsiveItems.forEach((item) => {
          const element = document.querySelector(item.element);
          const target = document.querySelector(item.target);
          const targetLg = document.querySelector(item.targetLg);
          const start = item.start;
          const end = item.end;
          const startLg = item.startLg;
          const endLg = item.endLg;

          // Not on other pages
          if (element) {
            const originalText = element.getAttribute("data-title");

            gsap.to(element, {
              scrollTrigger: {
                trigger: maxLg ? targetLg : target,
                toggleActions: "play none play none",
                start: maxLg ? startLg : start,
                end: maxLg ? endLg : end,
                onEnter: () => singleGlitch(element, originalText),
                onLeave: () => singleGlitch(element, originalText),
                onEnterBack: () => singleGlitch(element, originalText),
                onLeaveBack: () => singleGlitch(element, originalText),
              },
            });
          }
        });
      })();

      //
      // Global utility for glitch hover/focus. Add a data-title
      const glitchLinks = document.querySelectorAll(".glitch-link");

      glitchLinks.forEach((el) => {
        const originalLinkText = el.innerText;

        const handleGlitch = () => singleGlitch(el, originalLinkText);
        const parentLink = el.closest("a");
        const siblingElement = el.closest("button");

        el.addEventListener("mouseenter", handleGlitch);
        el.addEventListener("focus", handleGlitch);

        if (parentLink) {
          parentLink.addEventListener("mouseenter", handleGlitch);
          parentLink.addEventListener("focus", handleGlitch);
        }

        if (siblingElement) {
          siblingElement.addEventListener("mouseenter", handleGlitch);
          siblingElement.addEventListener("focus", handleGlitch);
        }
      });
    }
  );
})();

// Global - Easily toggle an 'animate' class on any element with 'gsap-animate' class
const globalGenerateAnimate = (() => {
  const targetElements = document.querySelectorAll(".gsap-animate");

  targetElements.forEach((targetElem) => {
    gsap.to(targetElem, {
      scrollTrigger: {
        trigger: targetElem,
        start: "top 98%",
        end: "bottom top",
        onEnter: () => targetElem.classList.add("animate"),
        onLeave: () => targetElem.classList.remove("animate"),
        onEnterBack: () => targetElem.classList.add("animate"),
        onLeaveBack: () => targetElem.classList.remove("animate"),
      },
    });
  });

  // GAME CHANGER!!!
  // Refresh ScrollTrigger instances on page load and resize
  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });

  // Greater than 520 so it doesn't refresh on  mobile(dvh)
  if (window.innerWidth > 520) {
    window.addEventListener("resize", () => {
      ScrollTrigger.refresh();
    });
  }
})();

// Global - Animate when scrolling away from the top of the page (also restore when scrolling up)
const scrollFromTop = (() => {
  let siteHeader = document.querySelector(".site-header");
  let lastScrollY = 0;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 120) {
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        siteHeader.classList.add("away-from-top");
      } else {
        // Scrolling up
        siteHeader.classList.remove("away-from-top");
      }
    } else {
      siteHeader.classList.remove("away-from-top"); // Restore on scroll up
    }

    lastScrollY = currentScrollY;
  });
})();
