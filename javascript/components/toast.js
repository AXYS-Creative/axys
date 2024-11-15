export const toast = document.querySelector(".toast"),
  closeBtn = document.querySelector(".toast__close-btn"),
  toastCta = document.querySelector(".toast-cta");

setTimeout(() => {
  toast?.classList.add("display-toast");
}, 2000);

const closeToast = () => {
  toast?.classList.remove("display-toast");
  toast?.setAttribute("aria-hidden", true);
};

closeBtn?.addEventListener("click", closeToast);
toastCta?.addEventListener("click", closeToast);
