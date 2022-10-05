//CALCULADORA DE PROMEDIO 
// si tu promedio es menor a 8 se repetira el ciclo hasta que sea mayor


let nombreApellido = prompt("Ingrese su apellido y nombre");
let primerTrimestre = parseFloat(prompt("Primer trimestre"));
let segundoTrimestre = parseFloat(prompt("Segundo trimestre"));
let final = parseFloat(prompt("Final"));
let promedio = (primerTrimestre + segundoTrimestre + final) / 3;

function calcularPromedio() {
    if (promedio >= 8) {
        alert(nombreApellido + " tu promedio es " + promedio + " estas aprobado!");
    } else {
        alert(nombreApellido + " tu promedio es " + promedio + " estas desaprobado");
    }
};

calcularPromedio();

while (true) {
    if (promedio >= 8) {
        alert("recibiras tu nota en unos dias")
        break;
    } else {
        let nombreApellido = parseInt(prompt("ingrese su apellido y nombre"));
        let primerTrimestre = prompt("primer trimestre");
        let segundoTrimestre = prompt("segundo trimestre");
        let final = prompt("final");
        let promedio = (primerTrimestre + segundoTrimestre + final) / 3;
        calcularPromedio();
    }
}

