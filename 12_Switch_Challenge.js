// Versión de piedra-papel-tijera con switch.

let options = new Map([
    [1, "piedra"],
    [2, "papel"],
    [3, "tijera"]
]);
var player = options.get(1);

function random(numbers) {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

var numbers = Array.from(options.keys());
var machine = options.get(random(numbers));

function validate(user, machine) {
    switch (true) {
        case user === machine:
            result = "Empate!";
            break;
        case (user === options.get(1) && machine === options.get(3)) || (user === options.get(2) && machine === options.get(1)) || (user === options.get(3) && machine === options.get(2)):
            result = "Ganó el usuario!";
            break;
        default:
            result = "Ganó la máquina!";
            break;
    }

    return result;
}

console.log("Usuario : " + player + "\t Máquina : " + machine);
console.log("Resultado : " + validate(player, machine));