/* mensaje de bienvenida */
console.log("Bienvenido");
/* variable de nombre */
let nombre = "Kevin";
/* mostrar en consola */
console.log(`Hola ${nombre}`);
/* mostrar en alert */
alert(`Hola ${nombre}`);
/* variable de lenguaje de programacion */
let pregunta = prompt("¿Cual es tu lenguaje de programación favorito?");
/* mostrara en consola */
console.log(pregunta);
/* variables de valores */
let numero1 = parseInt(Math.floor(Math.random() * 10));
let numero2 = parseInt(Math.floor(Math.random() * 10));
/* mostrar el resultado */
let suma = numero1 + numero2;
console.log(`la suma de los dos numeros son: ${suma}`);
/* resultado de una resta */
let resta = numero1 - numero2;
console.log(`La diferiencia de estos nueros es: ${resta}`);
/* edad */
let edad = parseFloat(prompt("Inserta tu edad: "));
if (edad >= 18) {
  alert("Usted es mayor de edad");
} else {
  alert("usted es menor de edad");
}

/* SABER SI UN NUMERO ES POSITIVO O NEGATIVO */
let numero = parseInt(prompt("Inserta un numero: "));
if (numero > 0) {
  console.log("el numero es positivo");
} else if (numero < 0) {
  console.log("el numero es negativo");
} else {
  console.log("el numero es 0");
}

/* aprobado o reprobado una materia */
let nota = parseFloat(prompt("Inserta tu calificaion:"));
if (nota >= 7) {
  console.log("Usted esta aprobado");
} else {
  console.log("Lo siento has reprobado");
}
/* numero aleatorio */
console.log(Math.random());
/* numero aleatorio entre 1 y 10 */
console.log(Math.floor(Math.random() * 10 + 1));
/* numero alatorio entre 1 y 1000 */
console.log(Math.floor(Math.random() * 1000 + 1));
