/*
Ejercicio 7:
Escribir una función que reciba un texto y lo devuelva al revés.
*/
let texto   = prompt('Ingrese un texto y lo devolveré al revés');
let long    = texto.length;
let letter  ="";
let reves   ="";

for (let i=long-1; i>=0; i--) {
    letter = texto[i];
    reves = reves + letter;
};
console.log(reves);
document.write(reves);