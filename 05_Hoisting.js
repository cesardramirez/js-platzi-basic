// Hoisting variables.
console.log(myName)  // undefined
var myName = "Cesar"

// Es como si el navegador hiciera :
var myName = undefined
console.log(myName)

// Al verificarlo :
var myName = undefined
console.log(myName + " soy ese hoisting")
myName = "Cesar"
// Imprime : 
// undefined soy ese hoisting
// "Cesar" // Imprime el valor de la variable myName en la terminal.


// Hoisting funciones.
hey()
function hey() {
    console.log(`Hey ${myName}!`)
}
var myName = "Cesar"
// Imprime :
// Hey undefined!  // Las funciones se declaran antes de las variables, por eso toma la función pero no la variable aún.
// undefined   // Es valor por defecto que devuelve al declarar una variable.
