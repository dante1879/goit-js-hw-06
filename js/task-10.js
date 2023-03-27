function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButtonRef = document.querySelector("button[data-create]");
const destroyButtonRef = document.querySelector("button[data-destroy]");
const boxesRef = document.querySelector("#boxes");
const inputRef = document.querySelector("#controls input");

createButtonRef.addEventListener("click", createBoxes);
destroyButtonRef.addEventListener("click", destroyBoxes);

function createBoxes() {
  let size = 30;
  const amount = inputRef.value;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = size + "px";
    div.style.height = size + "px";
    div.style.backgroundColor = getRandomHexColor();
    boxesRef.appendChild(div);
    size += 10;
  }
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
}
