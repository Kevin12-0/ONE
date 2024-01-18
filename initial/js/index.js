console.log("Hola mundo"); /* no afecta usar ; 
                        pero, es una buena practica de programación*/
let numeroSecreto = 6;
let numeroUsuairo;
let intentos = 0;
let palabraVeces = "vez";
/* mientras no se cumpla se repite el juego */
while (numeroUsuairo != numeroSecreto) {
  /* prompt insertal informacion */
  /* nomenclatura camel case para variables */
  numeroUsuairo = prompt("Dame un numero entre 1 y 10: ");
  /* /* forma 1 
alert(numeroUsuairo); */

  /* forma 2: desde consola */
  console.log(numeroUsuairo);

  /* comparacion con if */

  if (numeroUsuairo == numeroSecreto) {
    alert(
      `el numero es correcto: ${numeroUsuairo}, lo hiciste en ${intentos} veces`
    );
    /* si la condicion no se cuimple */
    break;
  } else {
    if (numeroUsuairo > numeroSecreto) {
      alert("el numero secreto es menor");
    } else {
      alert("el numero secreto es mayor");
    }
    /* contador incremental si el resultado es incorrecto */
    intentos++;
    palabraVeces = "veces";
    /* alert(`el numero ${numeroUsuairo} es incorrecto`); */
  }
}
