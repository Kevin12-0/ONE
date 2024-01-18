alert("Hola mundo"); /* no afecta usar ; 
                        pero, es una buena practica de programación*/
let numeroSecreto = 6;
/* prompt insertal informacion */
/* nomenclatura camel case para variables */
let numeroUsuairo = prompt("Dame un numero entre 1 y 10: ");
/* /* forma 1 
alert(numeroUsuairo); */

/* forma 2: desde consola */
console.log(numeroUsuairo);

/* comparacion con if */

if (numeroUsuairo == numeroSecreto) {
  alert(`el numero es correcto: ${numeroUsuairo}`);
  /* si la condicion no se cuimple */
} else {
  alert(`el numero ${numeroUsuairo} es incorrecto`);
}
