var fruits = ["Apple", "Banana", "Cherry", "Strawberry"];

console.log(fruits);  // ['Apple', 'Banana', 'Cherry', 'Strawberry']
console.log(fruits.length);  // 4
console.log(fruits[0]);  // Apple
console.log(fruits[2]);  // Cherry
console.log(fruits[4]);  // undefined

fruits.push("Peach", "Tangerine")  // push() : Agrega elementos al final del array.
console.log(fruits);  // ['Apple', 'Banana', 'Cherry', 'Strawberry', 'Peach', 'Tangerine']

fruits.pop()  // pop() : Elimina el último elemento del array.
console.log(fruits);  // ['Apple', 'Banana', 'Cherry', 'Strawberry', 'Peach']

fruits.unshift("Pear")  // unshift() : Agrega un elemento al inicio del array.
console.log(fruits)  //  ['Pear', 'Apple', 'Banana', 'Cherry', 'Strawberry', 'Peach']

fruits.shift()  // Elimina el primer elemento del array.
console.log(fruits)  //  ['Apple', 'Banana', 'Cherry', 'Strawberry', 'Peach']

var index = fruits.indexOf("Cherry")  // Trae el índice de un elemento.
console.log(index)  // 2

// Existe la posibilidad de definir un nombre al índice, una especie de key=value.
fruits["key"] = "value"
fruits["citric"] = "orange"
console.log(fruits)
  /*
  [
    'Apple',
    'Banana',
    'Cherry',
    'Strawberry',
    'Peach',
    key: 'value',
    citric: 'orange'
  ]
  */


// Iterar elementos del array con funciones.
// map() : Recorre cada elemento e interactua con cada uno. Crea un nuevo array.
let numbers = [3, 4, 5, 6];
let multiplier = numbers.map(function(element) {
    return element * 3;  // Cada elemento del array lo múltiplica por 3.
});
console.log("\n")
console.log(numbers)  // [ 3, 4, 5, 6 ]
console.log(multiplier)  // [ 9, 12, 15, 18 ]

let summation = numbers.map(x => x * 2);
console.log(summation)  // [ 6, 8, 10, 12 ]

let users = [
  {firstName : "Susan", lastName: "Steward"},
  {firstName : "Daniel", lastName: "Longbottom"},
  {firstName : "Jacob", lastName: "Black"}
];

let userFullnames = users.map(function(element) {
  return `${element.firstName} ${element.lastName}`;
})

console.log(userFullnames)  // [ 'Susan Steward', 'Daniel Longbottom', 'Jacob Black' ]

numbers.map(function(element, index, array) {
  console.log("element: %s, index: %i, array full: %s", element, index, array);
  // console.log(this)
  return element;
}, 80);  // this : 80. Se puede definir una función callback y que es llamado por defecto en cada elemento del array.
  // Si no se define el this, el valor por defecto es unefined.

// filter() : Obtener elementos según un criterio de búsqueda. Crea un nuevo array.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
var result = words.filter(word => word.length > 6);
console.log(result);  // ['exuberant', 'destruction', 'present']

// find() : Buscar y obtiene el primer elemento que tenga esa coincidencia.
result = words.find(word => word.startsWith('e'));
console.log(result)  // elite

// indexOf() : Obtiene el índice de un elemento.
result = words.indexOf('limit')
console.log(result)  // 1

// lastIndexOf() : Obtiene el último indice que coincida con el elemento.
const languages = ["C", "C++", "Python", "C++", "Java"];
result = languages.lastIndexOf("C++");
console.log(result)  // 3

// some() : Retorna verdadero si cumple la condición en algún elemento.
result = words.some(word => word == "present");
console.log(result)  // true

// every() : Retorna veradero si la condición cumple en cada uno de los elementos.
result = numbers.every(num => num < 10);
console.log(result)  // true
