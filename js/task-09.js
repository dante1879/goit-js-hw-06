function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector("body");
const spanRef = document.querySelector(".color");
const btnRef = document.querySelector(".change-color");

btnRef.addEventListener("click", onBtnClick);

function onBtnClick(event) {
  bodyRef.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = bodyRef.style.backgroundColor;
}
