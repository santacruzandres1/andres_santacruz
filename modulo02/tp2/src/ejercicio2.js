//Ejercicio 2:
//Completar las condiciones de los IF del siguiente script para que los mensajes se muestren siempre
//de forma correcta:
var num1 = 3;
var num2 = 7;
if(num1>num2) {
    console.log("num1 es mayor que num2");
}//else{
         //console.log("num1 no es mayor que num2");
//}

if(num2>0) {
console.log("num2 es positivo");
} else{
         console.log(`num2=(${num2}), es un numero negarivo`);
}
if(num1<0) {
console.log("num1 es negativo o distinto de cero");
}
if(num1<num2) {
console.log("Incrementar en 1 unidad el valor de num1 no lo hace mayor o igual que num2");
}