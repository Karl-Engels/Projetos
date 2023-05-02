let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let body = document.getElementById("body");
let nome = document.getElementById("cor");

function clicar() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandonNumber()];
  }

  nome.textContent = hexColor;
  body.style.backgroundColor = hexColor;
}

function getRandonNumber() {
  return Math.floor(Math.random() * hex.length);
}
