// Funciones : Conjunto de sentencias para generar ciertas acciones (tareas) con los valores de las variables.

/*
  Funciones declarativas : 'Function Declaration' / 'Function Statement'
    function myFunction() : number
  Son definidas para usarse de forma posterior, en cualquier momento de su llamado.
  JS va a utilizar un espacio en memoria para guardar toda la definición de una función.
  A la función si se le define un nombre.
*/
function myFunction() {
    return 15
}
myFunction()

/*
  Funciones de expresión (funciones anónimas) : 'Function expression'
    var myFunction : () => number
  Sólo pueden ser invocadas hasta el momento posterior a su definición.
  Hay una función adentro de esa variable. La diferencia es que tiene un nombre ese espacio en memoria.
  Son conocidas también como funciones anónimas ya que no se define un nombre a la función, sólo se está asignando a una variable.
*/
var myVarFunction = function() {
    return 15
}
myVarFunction()  // Se llama a la variable cómo si fuera una función.

// Parámetros en una función
function myFunctionWithParams(a, b) {
    return a + b
}
myFunctionWithParams(5, 4)

// Ejemplos
function greetStudent(student) {
    console.log(`Hola ${student}.`)
}
greetStudent("Diego")  // Hola Diego.

function sum(a, b) {
    return a + b
}
sum(5, 4)  // 9

// DIFERENCIAS
/*
Función declarativa:
  Se puede llamar a la función antes de que esta sea declarada primero.
  Hoisting: Detecta primero declaraciones de variables y funciones para poder ser utilizadas, pero no su definición.
*/
saludar('Diego')
function saludar(nombre) {
    console.log(`Hola ${nombre}.`)
}
// Mostrará el 'Hola Diego'

/*
Función de expresión:
  La función debe ser declarada primero para que pueda llamar más adelante, sino, mostrará una excepción.
  Al ser declarada dentro de una variable, detecta sólamente el var nombre (sin valor), por lo tanto la función NO es detectada en un principio.
*/
nombre('Diego')
var nombre = function(nombre) {
    console.log(`Hola ${nombre}.`)
}
// Mostrará la excepción : Uncaught TypeError: nombre is not a function.