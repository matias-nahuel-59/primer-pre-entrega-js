//CALCULADORA DE PROMEDIO 
// si tu promedio es menor a 8 se repetira el ciclo hasta que sea mayor

// se piden los datos del alumno
// objeto
function alumno1 (nombre,edad,materia){
    this.nombre = nombre;
    this.edad = edad;
    this.materia = materia;
}

const alumno = new alumno1 (
    this.nombre = prompt("ingrese su nombre"),
    this.edad = prompt("ingrese su edad"),
    this.materia = prompt("ingrese la materia")
);
let primerTrimestre = parseFloat(prompt("Primer trimestre"));
let segundoTrimestre = parseFloat(prompt("Segundo trimestre"));
let final = parseFloat(prompt("Final"));
let promedio = (primerTrimestre + segundoTrimestre + final) / 3;

function calcularPromedio() {
    if (promedio >= 8) {
        alert(nombre + " tu promedio es " + promedio + " estas aprobado!");
    } else {
        alert(nombre + " tu promedio es " + promedio + " estas desaprobado");
    }
};

calcularPromedio();

while (true) {
    if (promedio >= 8) {
        alert("recibiras tu nota en unos dias")
        break;
    } else {
        this.nombre = parseInt(prompt("ingrese su apellido y nombre"));
        let primerTrimestre = prompt("primer trimestre");
        let segundoTrimestre = prompt("segundo trimestre");
        let final = prompt("final");
        let promedio = (primerTrimestre + segundoTrimestre + final) / 3;
        calcularPromedio();
    }
}

console.log(alumno);