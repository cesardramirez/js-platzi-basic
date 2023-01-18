var number = 1;

function random(numbers) {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

switch (number) {
    case 1:
        console.log("Soy 1!");
        break;
    case 10:
        console.log("Soy un 10!");
        break;
    case 100:
        console.log("Soy un 100!");
        break;
    default:
        console.log("No hay nada!");
}