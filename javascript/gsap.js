// const gsapAnimations = () => {
//   gsap.registerPlugin(ScrollTrigger);

//   // Detailed markers for debugging

//   let whiteMarkers = {
//     startColor: "white",
//     endColor: "white",
//     indent: 128,
//   };

//   let navyMarkers = {
//     startColor: "navy",
//     endColor: "navy",
//     indent: 24,
//   };

//   let responsiveGsap = gsap.matchMedia();

//   responsiveGsap.add(
//     {
//       screenSm: "(max-width: 480px)",
//       screenMd: "(max-width: 768px)",
//       screenLg: "(max-width: 1024px)",
//       screenXxl: "(min-width: 1441px)",
//     },
//     (context) => {
//       let { screenSm, screenMd, screenLg } = context.conditions;

//       // Description - Pinning Benefits Section (Lg screens and below)
//       gsap.to("#benefits-section", {
//         scrollTrigger: {
//           trigger: "#benefits-section",
//           start: screenMd ? "top 2%" : "top 6%",
//           end: "+400%",
//           pin: screenLg ? true : false,
//           // markers: true,
//         },
//       });

//       gsap.fromTo(
//         ".benefit-list",
//         {
//           x: screenLg ? "1%" : null,
//         },
//         {
//           x: screenLg ? "-84.5%" : null,
//           scrollTrigger: {
//             trigger: "#benefits-section",
//             start: screenMd ? "top 2%" : "top 6%",
//             end: "+400%",
//             scrub: 1,
//             // markers: whiteMarkers,
//           },
//         }
//       );
//     }
//   );
// };

// gsapAnimations();
