let pageLoaded = false;
let timerDone = false;

const attemptCompleteLoading = () => {
  if (pageLoaded && timerDone) {
    const loadingScreen = document.querySelector(".loading-screen");
    const hero = document.querySelector("#hero-section");

    loadingScreen?.classList.add("load-complete");
    loadingScreen?.setAttribute("aria-hidden", "true");
    hero?.classList.add("load-complete");
  }
};

window.addEventListener("load", () => {
  pageLoaded = true;
  attemptCompleteLoading();
});

setTimeout(() => {
  timerDone = true;
  attemptCompleteLoading();
}, 1500);
