/*
  Nota 1: Desde la consola del navegador web se puede ejecutar código JS.
  Nota 2: Las variables let no pueden volver a ser declaradas por segunda vez.
*/

// Datos Primitivos
let myNumber = 40
let string1 = "César Ramírez"
let string2 = 'Hogar'
let string3 = `Apartamento`
let booleanTrue = true
let booleanFalse = false

/*
  null : Existe el espacio en memoria de la variable, pero el dato no existe.
  undefined : No se le asigna un valor a una variable.
*/
let emptyValue1 = null
let emptyValue2

// Datos No Primitivos
let array = [1, 2, 3]
let object = {name: "César"}

typeof 40  // 'number' Imprime el tipo de valor correspondiente.
typeof myNumber // 'number'
typeof string2  // 'string'
typeof booleanTrue  // 'boolean'
typeof array  // 'object'
typeof object  // 'object'
typeof emptyValue1  // 'object' El null lo toma como un object.
typeof emptyValue2  // 'undefined'
