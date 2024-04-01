let currentScroll = 0;

function initializeMarquee(selector, duration) {
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

const marqueeTweens = initializeMarquee(".marquee-inner", 16);
const marqueeTweensLogos = initializeMarquee(".marquee-inner-logos", 40);

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
