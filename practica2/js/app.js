/* variable para el dia de la semana */
let dia = prompt("¿Qué dia de la semana es?");
/* validadcion */
if (
  dia === "Sabado" ||
  dia === "Sábado" ||
  dia === "sabado" ||
  dia === "SABADO"
) {
  alert("Feliz fin de semana");
} else if (dia === "Domingo" || dia === "domingo" || dia == "DOMINGO") {
  alert("Feliz fin de semana");
} else {
  alert("Inserto un dia entre semana: " + dia);
}
/* variable pára el numero insertado */
let numero = prompt("Inserta un numero: ");
/* validacion para los numeros si es negativo o positivo */
if (numero > 0) {
  alert("el numero es entero positivo");
} else if (numero < 0) {
  alert("el numero es negativo");
} else {
  alert("tu numero es 0");
}
/* variable para la puntuacion del juego */
let puntuacion= prompt("inserta tu puntuacion");
/* validacion del puntaje */
if (puntuacion >= 100) {
  alert("!Felicitaciones, has ganado el juego¡");
} else if (puntuacion < 100) {
  alert("Intentalo de nuevo");
}
/* variable para el nombre */
let name = prompt("Insera tu nombre: ");
/* mostrar el mensaje de vienvenida */
alert(`Bienvenido: ${name}`);
