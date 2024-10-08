// Selecciona los elementos del DOM.
const inputRed = document.getElementById('red');
const inputGreen = document.getElementById('green');
const inputBlue = document.getElementById('blue');

const textoRed = document.getElementById('texto-red');
const textoGreen = document.getElementById('texto-green');
const textoBlue = document.getElementById('texto-blue');


let red = parseInt(inputRed.value);
let green = parseInt(inputGreen.value);
let blue = parseInt(inputBlue.value);


textoRed.textContent = red;
textoGreen.textContent = green;
textoBlue.textContent = blue;


function actualizarColor(red, green, blue) {
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}


inputRed.addEventListener('input', (change) => {
  red = Math.max(0, Math.min(255, parseInt(change.target.value))); 
  textoRed.textContent = red;
  actualizarColor(red, green, blue);
});


inputGreen.addEventListener('input', (change) => {
  green = Math.max(0, Math.min(255, parseInt(change.target.value))); 
  textoGreen.textContent = green;
  actualizarColor(red, green, blue);
});


inputBlue.addEventListener('input', (change) => {
  blue = Math.max(0, Math.min(255, parseInt(change.target.value))); 
  textoBlue.textContent = blue;
  actualizarColor(red, green, blue);
});