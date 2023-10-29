/*
Ejercicio 9:
Crear un programa que recibe las notas de un alumno, todos los números deben ser naturales
< 11. Debe calcular el promedio. Por último imprimir en pantalla si el valor de media es < 5
“Reprobado”, entre 6 y 8 “Aprobado” y si es mayor a 8 “Sobresaliente”.
*/
let contador = 1;
let nota;

do {
    nota = prompt(`Ingrese primera nota del alumno. Para finalizar ingrese el número 0.`);

    if (nota === null || nota === "") {
        alert("Ha cancelado el cálculo del promedio");
        break;
    }

    nota = parseInt(nota);

    if (!isNaN(nota) && nota >= 0 && nota <= 10) {
        let notas = [nota];

        do {
            alert(`La nota número ${contador} es ${notas[contador - 1]}`);
            nota = prompt(`Ingrese la siguiente nota del alumno. Para finalizar ingrese el número 0.`);

            if (nota === null || nota === "") {
                alert("Ha cancelado el cálculo del promedio");
                break;
            }

            nota = parseInt(nota);

            if (!isNaN(nota) && nota >= 0 && nota <= 10) {
                if (nota === 0) {
                    alert('Ha finalizado el cálculo. El promedio aparecerá a continuación');
                    break;
                }

                notas.push(nota);
                contador++;
            } else {
                alert('Ingrese una nota válida. Para salir, ingrese el número 0.');
            }
        } while (nota !== 0);

        // Cálculo del promedio
        let suma = 0;
        for (let i = 0; i < notas.length; i++) {
            suma += notas[i];
        }

        let promedio = suma / notas.length;
        let calificacion = "";

        if (promedio === 10) {
            calificacion = "EXCELENTE!";
        } else if (promedio < 10 && promedio >= 8) {
            calificacion = "Sobresaliente";
        } else if (promedio < 8 && promedio >= 6) {
            calificacion = "Aprobado";
        } else {
            calificacion = "Reprobado";
        }

        document.write(`El promedio del alumno es: ${promedio.toFixed(2)} ${calificacion}`);
        break; // Salir del bucle principal
    } else {
        alert('Ingrese una nota válida. El rango permitido es de 0 a 10.');
    }
} while (true);
