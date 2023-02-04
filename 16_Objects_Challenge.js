// Ejecutar en la terminal : npm install prompt-sync
// Agregar :
const prompt = require('prompt-sync')({sigint: true})

let cars = [];
var numberCars = 0;
let countCars = 0;

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

numberCars = prompt("¿Cuántos autos desea registrar?: ");

while (countCars < numberCars) {
    let brand = prompt('Marca: ');
    let model = prompt('Modelo: ');
    let year = prompt('Año: ');

    var newCar = new Car(brand, model, year);
    cars.push(newCar);

    countCars++;
}

console.log(cars);
/*
[
  Car { brand: 'Mazda', model: '3', year: '2022' },
  Car { brand: 'Tesla', model: 'Model X', year: '2019' }
]
*/