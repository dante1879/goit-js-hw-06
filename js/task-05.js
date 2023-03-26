const spanRef = document.querySelector("#name-output");
const nameInputRef = document.querySelector("#name-input");

nameInputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === "") {
    spanRef.textContent = "Anonymous";
  } else {
    spanRef.textContent = event.currentTarget.value;
  }
}
