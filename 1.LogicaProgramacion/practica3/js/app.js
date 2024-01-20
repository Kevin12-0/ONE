/* contador de 0 a 10 */
let counter = 0;
while (counter < 11) {
  alert(`número: ${counter}`);
  counter++;
}
/* contador de 10 a 0 */
let reverse = 10;
while (reverse > -1) {
  alert(`numero: ${reverse}`);
  reverse--;
}

/* contador con numero que inserte el usuario */
let numeroUsuario = prompt("Insera tu numero");
let inicio = 0;
while (inicio <= numeroUsuario) {
  alert(`numero: ${inicio}`); /* reemplazar alrte por console.log */
  inicio++;
}

