var students = ["Maria", "Sergio", "Rosa", "Daniel"];

function greetStudent(student) {
    console.log(`Hi, ${student}`);
}

// Recorrido por índice.
for (var i = 0; i < students.length; i++) {
    greetStudent(students[i]);
}

console.log();

// Recorrido por elemento (valor) - of.
for (var student of students) {
    console.log(student);  // Maria, Sergio, Rosa, Daniel.
}

// Recorrido por elemento (índice) - in.
for (var student in students) {
    console.log(student); // 0, 1, 2, 3
}

console.log();

// While : Hasta que la condición no se cumpla, seguirá en el ciclo.
while (students.length > 0) {
    var student = students.shift();  // Se va eliminando un elemento del array en cada iteración.
    greetStudent(student);
}

console.log();

var students = ["Maria", "Sergio", "Rosa", "Daniel"];
// Do-While : Debe iterar 1 vez por defecto. Hasta que la condición no se cumpla, seguirá en el ciclo.
do {
    var student = students.shift();
    greetStudent(student);
} while(students.length > 0);