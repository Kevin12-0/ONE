let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del desafio";

function console() {
  alert("El boton fue clicado");
}

function ciudad() {
  let nombre = prompt("Inserta el nombre de una ciudad de Brasil");
  alert(`Yo estube en la ciudad de ${nombre} y me acorde de ti`);
}

function alerta() {
  alert("Yo amo JS");
}

function suma() {
  let numero1 = parseFloat(prompt("Inserta un numero:"));
  let numero2 = parseFloat(prompt("Inserta un segundo numero:"));
  let result = numero1 + numero2;
  alert(`El resultado es ${result}`);
}
