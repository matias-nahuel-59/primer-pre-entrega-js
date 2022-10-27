//CALCULADORA DE PROMEDIO 
// si tu promedio es menor a 8 se repetira el ciclo hasta que sea mayor

// se piden los datos del alumno
// objeto
function alumno1(nombre, edad, materia) {
    this.nombre = nombre;
    this.edad = edad;
    this.materia = materia;
}

const alumno = new alumno1(
    this.nombre = prompt("ingrese su nombre"),
    this.edad = prompt("ingrese su edad"),
    this.materia = prompt("ingrese la materia")
);
let primerTrimestre = parseFloat(prompt("Primer trimestre"));
let segundoTrimestre = parseFloat(prompt("Segundo trimestre"));
let final = parseFloat(prompt("Final"));
let promedio = (primerTrimestre + segundoTrimestre + final) / 3;

// no se me ocurrio otra cosa que hacer
// 
let datos = [promedio]
let promedioEsMayorQueCinco = datos.find(promedio => promedio > 5);
console.log(UnNumeroMayorQueCinco);

function calcularPromedio() {
    if (promedio >= 8) {
        alert(nombre + " tu promedio es " + promedio + " estas aprobado!");
    } else {
        alert(nombre + " tu promedio es " + promedio + " estas desaprobado");
    }
};

calcularPromedio();

console.log(alumno);
