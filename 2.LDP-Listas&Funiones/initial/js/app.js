let numeroSecreto = 0; /* variable global */
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
/* crear una funcion */
function verificarIntento() {
  /* capturara el numero del usuario insertado en el input  */
  let numeroDeUsuario = parseInt(
    document.getElementById("valorUsuario").value
  ); /* cambiar tipo de dato */

  console.log(numeroDeUsuario === numeroSecreto); /* retorna un boleano */
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Lo lograste, lo hiciste en ${intentos} ${
        intentos == 1 ? "vez" : "veces"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (numeroDeUsuario > numeroSecreto) {
    /* el usuario no acerto */
    asignarTextoElemento("p", "el numero secreto es menor");
  } else if (numeroDeUsuario < numeroSecreto) {
    asignarTextoElemento("p", "el numero secreto es mayor");
  }
  intentos++;
  limpiarInput();
  return;
}

function limpiarInput() {
  document.querySelector("#valorUsuario").value = "";
}

function asignarTextoElemento(elemento, texto) {
  /* esto es para generar texto seleccionando una equiqueta */
  let titulo = document.querySelector(elemento);
  titulo.innerHTML = texto;
}

function generarNumeroSecreso() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  /* si el numero esta en la lista */
  /* si ya se sortearon todos los numeros */
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "ya se sortearon todos los numerosposibles");
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreso();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  /* llamar a funcion */
  /* generar el numero aleatorio */
  /* intentos reiniciar */
  asignarTextoElemento("h1", "Juego del numero secreto!");
  /* mesaje de inicio del intervalo de numeros */
  asignarTextoElemento("p", `Indica un numero entre 1 y ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreso();
  intentos = 1;
}
function reiniciarJuego() {
  /* limpiar la caja */
  limpiarInput();
  condicionesIniciales();

  /* desavilitar el boton */
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
