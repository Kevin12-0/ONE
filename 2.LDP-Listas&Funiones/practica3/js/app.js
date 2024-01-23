/* IMC */
function imc() {
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);
  let imc = document.getElementById("imc");
  let result = peso / (altura * altura);
  imc.innerHTML = `${result}`;
}

/* calcular el valor factorial de un numero */

function valorVectorial() {
  let valor = parseFloat(document.getElementById("valor").value);
  let resultado = document.getElementById("resultadoVectorial");
  resultado.innerHTML = Math.abs(valor);
}

/* convertir dolar a Peso */
function convertir() {
  let dolar = parseFloat(document.getElementById("dolar").value);
  let convercion = document.getElementById("convercion");
  convercion.innerHTML = dolar * 17.18658;
}

/* caulcular area de un rectangulo */

function area() {
  let base = parseFloat(document.getElementById("a").value);
  let altura = parseFloat(document.getElementById("h").value);
  let parrafo = document.getElementById("area");
  let result = base * altura;
  parrafo.innerHTML = result;
}

/* calular el area y perimetro de un circulo */
function areaYPerimetro() {
  let radio = parseFloat(document.getElementById("radio").value);
  let area = 3.1416 * (radio * radio);
  let perimetro = 2 * 3.1416 * radio;
  let parrafo = document.getElementById("areaYPerimetro");
  parrafo.innerHTML = `area: ${area}, perimetro: ${perimetro}`;
}
