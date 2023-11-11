const showButton = document.querySelector(".subscribe-button");
let email = document.getElementById("email");
let errorStateText = document.querySelector(".error-message");
const success = document.querySelector(".success-modal");
const closeButton = document.querySelector(".dismiss-button");
const emptyField = "Valid email required";
const validField = "";
var validRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

showButton.addEventListener("click", function () {
  if (email.value.match(validRegex)) {
    success.showModal();
    errorStateText.innerText = validField;
    return true;
  } else {
    errorStateText.innerText = emptyField;
    return false;
  }
});

closeButton.addEventListener("click", function () {
  success.close();
});
