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
