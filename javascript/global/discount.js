import { toast } from "../components/toast.js";

// Countdown timer for dynamically ending discount state
const discountCountdownTimer = () => {
  const currentDate = new Date();
  const endDate = new Date("2024-12-31T23:59:59");

  return currentDate < endDate;
};

/**
 * Using a timer so I don't need to manually update this at midnight on new years eve... Just the stripe links 🥲
 * This also accepts a boolean value if you'd like to change it manually.
 */
// let discount = discountCountdownTimer();
let discount = false;

//
// Plans Section
//
const planCards = document.querySelectorAll(".plan-card");

planCards?.forEach((card) => {
  card.classList.toggle("plan-card--discounted", discount);

  // Banner
  let discountBanner = card.querySelector(".discount-banner");
  discountBanner.setAttribute("aria-hidden", !discount);

  // Price
  let defaultPrice = card.querySelector(".card-price--default");
  defaultPrice.setAttribute("aria-hidden", discount);

  let discountedPrice = card.querySelector(".card-price--discounted");
  discountedPrice.setAttribute("aria-hidden", !discount);

  // CTA
  let defaultCta = card.querySelector(".card-cta--default");
  defaultCta.setAttribute("aria-hidden", discount);

  let discountedCta = card.querySelector(".card-cta--discounted");
  discountedCta.setAttribute("aria-hidden", !discount);
});

//
// Benefits Section (Fixed monthly rate)
//
const discountHighlight = document.querySelector(".discount-highlight");
const discountBenefitText = document.querySelector(".discount-benefit-text");

discountHighlight?.classList.toggle("discount-styles", discount);

discountBenefitText?.setAttribute("aria-hidden", !discount);

//
// Toast
//
if (!discount && toast) {
  toast.style.display = "none";
  toast.setAttribute("aria-hidden", true);
}
