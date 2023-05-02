const display = document.querySelector('.display')

function clicou(v) {
 display.value = display.value + v
}

function limpar() {
  display.value = ''
}

function backSpace() {
  display.value = display.value.slice(0 , -1)
}

function calcular() {
  display.value = eval(display.value)
}

