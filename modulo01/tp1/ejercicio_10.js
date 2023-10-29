let meses, val1, mes, resultado;
meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses);
val1 = prompt("Ingrese un número del 1 AL 12 para saber el mes al que corresponde");
mes = val1-1;

do {
    resultado =  `El mes correspomdiente al número ${val1} es: `; 
  if ( val1 >=1 && val1 <=12) {
    document.write(resultado,meses[mes]);
    break;
 } else if (val1 <1 || val1 >11){
    alert('Número incorrecto. Por favor ingrese un número del 1 AL 12 para saber el mes al que corresponde');
    val1 = prompt("Ingrese un número del 1 AL 12 para saber el mes al que corresponde");
    mes = val1 - 1;
    }
}  while(true);
