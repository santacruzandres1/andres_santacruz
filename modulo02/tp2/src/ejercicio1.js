/**
 Ejercicio 1:
A partir del siguiente array que se proporciona:
var valores = [true, false, 2, "hola", "mundo", 3, "char"];
1. Determinar cuál de los “elementos de texto” es mayor, es decir el que contenga más letras.
2. Imprimir estos elementos de menor a mayor cantidad de letras.
3. Determinar el resultado de las cuatro operaciones matemáticas básicas (suma, resta,
multiplicación y división) realizadas con los dos elementos numéricos
 */
let valores =[true, false, 2, "hola", "mundo", 3, "char"];
let mayor='';
for (const dato of valores){
    if (dato.length>mayor.length){
        mayor = dato;
    }
} 
document.write(`el mayor es ${mayor}`)

