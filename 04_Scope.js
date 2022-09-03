/**
 * Un scope local puede ingresar a las variables globales.
 * Un scope global NO puede ingresar a las variables de un scope local.
 */
// INI : Scope Global
var nombre = "Diego"

// INI : Scope Local
function myFunction() {
    var apellido = "De Granda"
    return nombre + " " + apellido
}
// FIN : Scope Local
// FIN : Scope Global

myFunction()  // Diego de Granda
console.log(apellido)  // 'VM364:1 Uncaught ReferenceError: apellido is not defined'