let numeroSecreto = generarNumeroSecreso(); /* variable global */

/* crear una funcion */
function verificarIntento() {
  /* capturara el numero del usuario insertado en el input  */
  let numeroDeUsuario = parseInt(
    document.getElementById("valorUsuario").value
  ); /* cambiar tipo de dato */
  console.log(typeof numeroDeUsuario); /* verificar el tipo de dato realizado */
  console.log(numeroSecreto);
  console.log(numeroDeUsuario);
  console.log(numeroDeUsuario === numeroSecreto); /* retorna un boleano */
  return;
}

function asignarTextoElemento(elemento, texto) {
  /* esto es para generar texto seleccionando una equiqueta */
  let titulo = document.querySelector(elemento);
  titulo.innerHTML = texto;
}

function generarNumeroSecreso() {
  let numeroSecreto = Math.floor(Math.random() * 10) + 1;
  return numeroSecreto;
}

/* llamar a funcion */
asignarTextoElemento("h1", "Juego del numero secreto!");
asignarTextoElemento("p", "Indica un nuemro del 1 al 10");
