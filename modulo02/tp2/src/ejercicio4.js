/*
Ejercicio 4:
Escribir el código de una función a la que se pasa como parámetro un número entero y
devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por
pantalla el resultado devuelto por la función.
Por ejemplo si ingresara un dos el resultado debe ser par y si ingresara un 5 el resultado
debe ser impar
*/
let num = prompt('Ingrese el número para saber si es par o impar');
num = parseInt(num);

if (num % 2 === 0) {
  console.log(`El número ${num} es par`);
  document.write(`El número ${num} es par`);
} else {
  console.log(`El número ${num} es impar`);
  document.write(`El número ${num} es impar`);
}

