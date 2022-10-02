//CALCULADORA DE PROMEDIO 

let primerTrimestre = parseFloat(prompt("Primer trimestre"));
let segundoTrimestre = parseFloat(prompt("Segundo trimestre"));
let final = parseFloat(prompt("Final"));
let promedio = (primerTrimestre + segundoTrimestre + final) / 3;


while (primerTrimestre == "") {
    alert("No ingresaste un numero")
    prompt("Primer trimestre")
}

while (segundoTrimestre == "") {
    alert("No ingresaste un numero")
    prompt("Segundo trimestre")
}

while (final == "") {
    alert("No ingresaste un numero")
    prompt("Final")
}

if (promedio >= 8) {
    alert("Tu promedio es " + promedio + " estas aprobado!")
} else {
    alert("Tu promedio es " + promedio + " estas desaprobado")
}