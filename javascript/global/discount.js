// Toggle this between true and false to set the discount state. Don't forget to update the data schema in the head.
let discount = true;

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

discountHighlight.classList.toggle("discount-styles", discount);

discountBenefitText.setAttribute("aria-hidden", !discount);
