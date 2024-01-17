/* varible de error */
let mensajeError = "Error, Completa todos los campos !!";
/* asignar nombre */
let nombreUsuario = prompt("Inserte su nombre: ");
/* asginar edad */
let edadUsuario = prompt("Inserte su edad: ");
/* condicional mayor o igual a 18, puede obtener su licencia */
if (edadUsuario >= 18) {
  alert(
    "Tu nombre es: " +
      nombreUsuario +
      "Tu edad es de: " +
      edadUsuario +
      " Puedes obtener tu licencia de conducir"
  );
} else {
  alert(
    "Tu edad es menor de 18, lo sentimos no podemos proporcionarte tu licencia"
  );
}
