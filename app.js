const dob = document.querySelector("#dob");
const lucky = document.querySelector("#lucky-num");
const checkBtn = document.querySelector("#check-btn");
const message = document.querySelector("#msg");

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

function validateLucky() {
  let dobString = dob.value.split("-").join("");
  let luckyNum = +lucky.value;
  let dobNum = 0;
  for (let i = 0; i < dobString.length; i++) {
    dobNum = dobNum + +dobString[i];
  }
  if (luckyNum <= 0) {
    message.innerText = "😵 Lucky number can't be negative or 0 😵";
  } else {
    let remainder = dobNum % luckyNum;
    if (remainder === 0) {
      message.innerText = "🥳 Your Birthdate is Lucky 🥳";
    } else {
      message.innerText = "😕 Sorry! Your Birthdate in not Lucky 😕";
    }
  }
}

checkBtn.addEventListener("click", validateLucky);
