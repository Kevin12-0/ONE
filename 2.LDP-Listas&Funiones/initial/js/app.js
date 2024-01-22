/* crear una funcion */
function intentoDeUsuario() {
  alert("Click desde el boton");
}

function asignarTextoElemento(elemento, texto) {
  /* esto es para generar texto seleccionando una equiqueta */
  let titulo = document.querySelector(elemento);
  titulo.innerHTML = texto;
}
/* llamar a funcion */
asignarTextoElemento("h1", "Juego del numero secreto!");
asignarTextoElemento("p", "Indica un nuemro del 1 al 10");
