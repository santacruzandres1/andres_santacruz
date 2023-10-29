let valor = prompt("Ingrese un número");
let num = parseInt(valor);
let c = num;
let factorial = 1;

for (let i = 1; i <= num; i++) {
  factorial *= c;
  c--;
}

console.log(`El factorial de ${num} es: ${factorial}`);
