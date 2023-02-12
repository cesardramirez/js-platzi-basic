// Versión de piedra-papel-tijera con if-else.

let options = new Map([
  [1, "piedra"],
  [2, "papel"],
  [3, "tijera"]
]);
var player = options.get(1);
//options.set(1, "piedra");

function random(numbers) {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

var numbers = Array.from(options.keys());
var machine = options.get(random(numbers));

function validate(user, machine) {
  if (user != machine) {
    if (user === options.get(1) && machine === options.get(3)) {  // Piedra vs Tijera.
      result = "Ganó el usuario!"
    } else if (user === options.get(2) && machine === options.get(1)) {  // Papel vs Piedra.
      result = "Ganó el usuario!"
    } else if (user === options.get(3) && machine === options.get(2)) {  // Tijera vs Papel.
      result = "Ganó el usuario!"
    } else {
      result = "Ganó la máquina!"
    }
  } else {
      result = "Empate";
  }
  return result;
}

console.log("Usuario : " + player + "\t Máquina : " + machine);
console.log("Resultado : " + validate(player, machine));
