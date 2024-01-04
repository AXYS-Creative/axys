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

  updateText();
  setInterval(updateText, 5000);
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

// const marquee = () => {
//   document.addEventListener("DOMContentLoaded", function () {
//     const marqueeInner = document.querySelector(".marquee .marquee-inner");
//     const content = marqueeInner.innerHTML;
//     marqueeInner.innerHTML = content.repeat(2);

//     let lastScrollTop =
//       window.pageYOffset || document.documentElement.scrollTop;
//     let position = 0;
//     let direction = -1; // Start moving in a negative direction
//     let speed = 6;
//     const originalContentWidth = marqueeInner.offsetWidth / 2;

//     function updateMarquee() {
//       position += speed * direction;

//       if (direction === -1 && position <= -originalContentWidth) {
//         position += originalContentWidth;
//       } else if (direction === 1 && position >= 0) {
//         position -= originalContentWidth;
//       }

//       marqueeInner.style.transform = `translateX(${position}px)`;
//       requestAnimationFrame(updateMarquee);
//     }

//     window.addEventListener(
//       "scroll",
//       function () {
//         let st = window.pageYOffset || document.documentElement.scrollTop;
//         if (st > lastScrollTop) {
//           // Scrolling down, continue in negative direction
//           direction = -1;
//         } else if (st < lastScrollTop) {
//           // Scrolling up, reverse to positive direction
//           direction = 1;
//         }
//         lastScrollTop = st <= 0 ? 0 : st;
//       },
//       false
//     );

//     requestAnimationFrame(updateMarquee);
//   });
// };

// marquee();
