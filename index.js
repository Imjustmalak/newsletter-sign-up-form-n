const form = document.getElementById("signupForm");
const card_1 = document.querySelector(".card");
const card_2 = document.querySelector(".card-2");
const emailInput = document.getElementById("email");
const subscribedEmail = document.getElementById("subscribedEmail");
const dismissButton = document.getElementById("dismissButton");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (email === "") {
    emailInput.style.borderColor = "red";
    emailInput.nextElementSibling.innerText = "Enter an email address";
  } else if (!validateEmail(email)) {
    emailInput.style.borderColor = "red";
    emailInput.nextElementSibling.innerText = "Please enter a valid email address";
  } else {
    subscribedEmail.textContent = email;
    card_1.classList.add("hide");
    card_2.classList.remove("hide");
    clearErrorMessage();
  }
});

dismissButton.addEventListener("click", () => {
  card_1.classList.remove("hide");
  card_2.classList.add("hide");
  emailInput.value = "";
  emailInput.style.borderColor = "initial";
  emailInput.nextElementSibling.innerText = "";
});

function clearErrorMessage() {
  const errorContainer = document.getElementById("errorContainer");
  errorContainer.classList.add("hide");
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
