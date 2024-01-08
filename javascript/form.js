const mailForm = document.querySelector(".mail-form");
const confirmation = document.querySelector(".confirmation-message");

const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  console.log("event target:", myForm);

  const formData = new FormData(myForm);
  console.log("form data:", formData);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      mailForm.classList.add("active");
      confirmation.classList.add("active");

      setTimeout(function () {
        mailForm.classList.remove("active");
        confirmation.classList.remove("active");
      }, 5000);
    })
    .catch((error) => alert(error));
};

mailForm.addEventListener("submit", handleSubmit);
