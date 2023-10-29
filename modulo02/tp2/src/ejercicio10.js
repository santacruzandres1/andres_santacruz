/**
 Ejercicio 10:
Escribir un programa que reciba el número del mes y devuelva si tiene 31, 30 o menos días.
Por ejemplo: si ingreso el mes 12 el resultado debe decir tiene 31 días.
Adicionalmente agregue una ecuacion para el mes de febrero que determina que cantidad de dias tiene dependiendo del año
 */

let mes, anio;
let mesValido = false;
let anioValido = false;

while (!mesValido) {
    mes = parseInt(prompt("Ingrese el número del mes (1-12):"));

    if (mes >= 1 && mes <= 12) {
        mesValido = true;
    } else {
        alert("Mes inválido. Ingrese un número de mes válido (1-12).");
    }
}

while (!anioValido) {
    anio = parseInt(prompt("Ingrese el año:"));

    if (anio >= 1000 && anio < 10000) {
        anioValido = true;
    } else {
        alert("Año inválido. Ingrese un año válido (entre 1000 y 9999).");
    }
}

let diasEnMes;

switch (mes) {
    case 2:
        if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
            diasEnMes = 29;
        } else {
            diasEnMes = 28;
        }
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        diasEnMes = 30;
        break;
    default:
        diasEnMes = 31;
}

document.write(`El mes ${mes} del año ${anio} tiene ${diasEnMes} días.`);
