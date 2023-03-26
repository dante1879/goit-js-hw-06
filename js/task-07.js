const rangeInputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

rangeInputRef.addEventListener("input", onRangeInputChange);

function onRangeInputChange(event) {
    spanRef.style.fontSize = event.currentTarget.value + 'px';
}