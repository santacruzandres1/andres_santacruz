/* 
Ejercicio 8:
Crea una función que genere 100 números aleatorios entre 1 y 100 que no se repitan y luego
imprima por pantalla usando document.write().
*/

let numAl = [];
let contador = 0;

while (contador < 100) {
  let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

  if (!numAl.includes(numeroAleatorio)) {
    numAl.push(numeroAleatorio);
    contador++;
  }
}

console.log(numAl);
