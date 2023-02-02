// Un objeto tiene tanto atributos (propiedades) como métodos (funciones).
var car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    details: function() {
        console.log(`Car: ${this.brand} ${this.model} ${this.year}`);  // this: Referencia al propio objeto.
    }
};

console.log(car);  // { brand: 'Toyota', model: 'Corolla', year: 2020 }
console.log(car["brand"])  // Toyota
console.log(car.brand)  // Toyota
car["details"]()  // Car: Toyota Corolla 2020
car.color = "Rojo"  // Agregar una nueva propiedad.
delete car.color  // Eliminar una propiedad.
car.details()  // Car: Toyota Corolla 2020

console.log();

// Nota: Los arrays se comportan como objetos.
var numbers = [1, 2, 3]
console.log(numbers["length"])  // 3
var newNumbers = numbers["map"](function (elem) {
    return elem * 2
})
console.log(newNumbers)  // [ 2, 4, 6 ]