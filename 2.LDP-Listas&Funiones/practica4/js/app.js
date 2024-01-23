/* lsita vacia */
let lista = [];
/* lista de lenguajes */
let lenguajes = ["js", "java", "c", "c#", "python"];
/* agreagar elementos a la lista */
lenguajes.push("ruby", "go");
/* funcion para mostrar los elementos de una lista */
function mostrarElementos() {
  console.log(lenguajes);
}
/* llamar a la funcion */
mostrarElementos();

function mostrarElementosReversa() {
  console.log(lenguajes.reverse());
}
mostrarElementosReversa();

/* lsita de numeros */
let listaNumeros = [10, 2, 3, 4, 5, 6, 7, 8];
/* calcular promedio */
function promedio() {
  let suma = listaNumeros.reduce(function (acc, values) {
    return acc + values;
  }, 0);
  let cantidad = listaNumeros.length;
  let promedio = suma / cantidad;
  console.log(`promedio ${promedio}`);
  console.log(suma)
}
promedio();

function numeroMayorYNumeroMenor() {
  console.log(Math.max(listaNumeros));
  console.log(Math.min(listaNumeros));
}
numeroMayorYNumeroMenor();
