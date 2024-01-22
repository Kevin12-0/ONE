/* funcion de Hola Mundo  */

function helloWorld() {
  console.log("Hola, Mundo!!");
}

function mostrarNombre() {
  let nombre = document.getElementById("nombreUsuario").value;
  console.log(`Hola, ${nombre}`);
}

function valorDoble() {
  let numero = parseFloat(document.getElementById("numeroUsuario").value);
  console.log(numero * 2);
}

function promedio() {
  let numero1 = parseFloat(document.getElementById("numeroUno").value);
  let numero2 = parseFloat(document.getElementById("numeroDos").value);
  let numero3 = parseFloat(document.getElementById("numeroTres").value);
  let promedio = (numero1 + numero2 + numero3) / 3;
  let resultado = document.getElementById("promedio");
  resultado.innerHTML = `Promedio: ${promedio}`;
}

function numeroMayor() {
  let numero1 = parseFloat(document.getElementById("valorUno").value);
  let numero2 = parseFloat(document.getElementById("valorDos").value);
  let resultado = document.getElementById("numeroMayor");
  if (numero1 > numero2) {
    resultado.innerHTML = `${numero1}`;
  } else if (numero1 < numero2) {
    resultado.innerHTML = `${numero2}`;
  }
}

function numeroCubo() {
  let numero = parseFloat(document.getElementById("numero").value);
  let cubo = numero * numero;
  let resultado = document.getElementById("numeroCubo");
  resultado.innerHTML = `${cubo}`;
}
helloWorld();
