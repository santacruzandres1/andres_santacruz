let a, b;
a = 3; b = 7;
resultado = a * b;
document.write(`Variable a contiene ${a} <br> ` );
document.write(`Variable b contiene ${b} <br> ` );
document.write(`El producto de a por b es ${resultado} <br> `);
document.write("Los puntos de interrupcion son fundamentales para programar");
// El error que indica por consola es el siguiente: ercicio_5.js:6 Uncaught ReferenceError: result is not defined     at ejercicio_5.js:6:45
//Lo que nos marca la consola es que en la linea 6 del archivo ejercicio_5.js la variable "result" no está definida. Una vez identificado nuestro error procedemos a corregir cambiando result por resultado que es la variable que si esta definida.
