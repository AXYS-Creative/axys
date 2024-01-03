// let mqMaxSm = window.matchMedia("(max-width: 480px)");
let mqMouse = window.matchMedia("(hover: hover)");

const heroGlitchText = () => {
  const dynamicText = document.querySelector(".dynamic-text");
  const words = [
    {
      word: "Creative",
      color: "#E48C66", // Coral
    },
    {
      word: "Responsive",
      color: "#7EC1D4", // Blue
    },
    {
      word: "Accessible",
      color: "#A4D1A2", // Green
    },
    {
      word: "Performant",
      color: "#FBFAA2", // Yellow
    },
  ];

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let index = 0;

  function applyGlitchEffect(wordObj) {
    let glitchIterations = 0;
    const maxIterations = wordObj.word.length * 4; // Increase value to increase length of glitch.
    dynamicText.style.color = wordObj.color; // Set the color

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
        dynamicText.innerText = wordObj.word; // Ensure final word is set correctly
      }
    }, 25);
  }

  function updateText() {
    applyGlitchEffect(words[index]);
    index = (index + 1) % words.length;
  }

  // Start the cycle and glitch effect
  updateText();
  setInterval(updateText, 5000); // Adjust timing as needed
};

heroGlitchText();

const magnetEffect = () => {
  if (mqMouse.matches) {
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
  }
};

magnetEffect();

const gsapAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Detailed markers for debugging

  let whiteMarkers = {
    startColor: "white",
    endColor: "white",
    indent: 128,
  };

  let navyMarkers = {
    startColor: "navy",
    endColor: "navy",
    indent: 24,
  };

  let responsiveGsap = gsap.matchMedia();

  responsiveGsap.add(
    {
      screenSm: "(max-width: 480px)",
      screenMd: "(max-width: 768px)",
      screenLg: "(min-width: 769px)",
    },
    (context) => {
      let { screenSm, screenMd, screenLg } = context.conditions;

      // Description - Pinning Benefits Headline
      // gsap.to(".benefits-headline-full", {
      //   scrollTrigger: {
      //     trigger: ".benefits-headline-full",
      //     start: screenLg ? "top center" : "top 16%",
      //     // end: "+480%",
      //     pin: true,
      //     markers: whiteMarkers,
      //   },
      // });

      // // Description - Shifting project images in Work Section
      // function workItemTimeline(itemNumber, scrubFactor) {
      //   return gsap
      //     .timeline({
      //       scrollTrigger: {
      //         trigger: ".work",
      //         scrub: scrubFactor,
      //         start: "top 70%",
      //         end: "+580%",
      //         ease: "linear",
      //       },
      //     })
      //     .to(`.work-item-${itemNumber}`, {
      //       x: screenSm ? "-570vw" : screenMd ? "-288vw" : "-140vw",
      //     });
      // }

      // const workItems = document.querySelectorAll(".work-item");

      // workItems.forEach((el, index) => {
      //   workItemTimeline(index + 1, 0.12 * (index + 1));
      // });
      // END - Shifting project images

      // Descriptiion - Animate the membership prcing cards
      // const animateMembershipCards = (selector, trigger, delay) => {
      //   gsap.fromTo(
      //     selector,
      //     {
      //       opacity: 0,
      //       x: screenMd ? 120 : 200,
      //     },
      //     {
      //       opacity: 1,
      //       x: 0,
      //       duration: 1.25,
      //       delay: delay,
      //       ease: screenMd ? "elastic.out(1, 0.75)" : "elastic.out(1, 0.4)",
      //       scrollTrigger: {
      //         trigger: trigger,
      //         start: "top 80%",
      //         end: screenMd ? "80% top" : "64% top",
      //         toggleActions: "restart reverse restart reverse",
      //       },
      //     }
      //   );
      // };

      // animateMembershipCards(".membership-card-1", ".membership-options", 0);
      // animateMembershipCards(".membership-card-2", ".membership-options", 0.25);

      // Description - Question List animation
      // gsap.fromTo(
      //   ".faq-item",
      //   {
      //     x: screenMd ? -24 : -48,
      //     opacity: 0,
      //     pointerEvents: "none",
      //   },
      //   {
      //     x: 0,
      //     opacity: 1,
      //     pointerEvents: "all",
      //     stagger: 0.08,
      //     ease: screenMd ? "back.out(1)" : "back.out(2)",
      //     scrollTrigger: {
      //       trigger: ".questions-list",
      //       start: "top 80%",
      //       end: screenMd ? "80% top" : "64% top",
      //       toggleActions: "restart reverse restart reverse",
      //     },
      //   }
      // );
    }
  );

  // Query only for large screen animations (Shift Work Title)
  responsiveGsap.add("(min-width: 768px)", () => {
    // Shift Title Text for Work Section. Large screens only***
    const shiftWorkTitle = gsap.timeline({
      scrollTrigger: {
        trigger: ".work",
        scrub: true,
        start: "top 10%",
        end: "+620%",
      },
    });

    shiftWorkTitle.fromTo(
      ".word-selected",
      {
        translateX: "35%",
      },
      {
        translateX: 0,
      }
    );

    const shiftWorkTitle2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".work",
        scrub: true,
        start: "top 10%",
        end: "+620%",
      },
    });

    shiftWorkTitle2.fromTo(
      ".word-work",
      {
        translateX: "60%",
      },
      {
        translateX: 0,
      }
    );
  });
};

gsapAnimations();
