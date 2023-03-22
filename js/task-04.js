const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueSpan = document.querySelector("#value");

decrementBtn.addEventListener("click", () => {
  valueSpan.textContent = parseInt(valueSpan.textContent) - 1;
});

incrementBtn.addEventListener("click", () => {
  valueSpan.textContent = parseInt(valueSpan.textContent) + 1;
});
