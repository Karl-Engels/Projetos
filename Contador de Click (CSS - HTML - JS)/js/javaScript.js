let number = document.querySelector(".number");
let background = document.querySelector("body");
let x = 0;
let resultado = "";
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getRandonNumber() {
  return Math.floor(Math.random() * hex.length);
}

function decrease() {
  resultado = x = x - 1;
  number.innerHTML = resultado;

  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandonNumber()];
  }

  background.style.backgroundColor = hexColor;

  if (resultado === 0) {
    number.style.color = "black";
    background.style.backgroundColor = "black";
  }
}

function increase() {
  resultado = x = x + 1;
  number.innerHTML = resultado;

  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandonNumber()];
  }

  background.style.backgroundColor = hexColor;

  if (resultado === 0) {
    background.style.backgroundColor = "black";
  }
}

function reset() {
  x = 0;
  number.innerHTML = x;
}
