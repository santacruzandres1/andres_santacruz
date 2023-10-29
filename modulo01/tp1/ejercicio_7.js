let  resultado;// en este caso se definen la variable dato y resultado. La variable dato la quité del codigo debido a que no se utilizaba en lo que seguia del codigo.
val1 = window.prompt("Introduce tu nombre", "...");// en la linea 2 nos pide que ingresemos nuestro nombre a traves de una ventana emergente y aloja el dato en val1
val2 = window.prompt("Introduce tu apellido", "...");// la linea 3 es muy similar a la anterior con la diferencia que nos pide el apellido y lo aloja en la variale val2
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ;// en la linea 4 se aloja en la variable resultado una cadena de texto que contiene la una cadena de texto y concatena los valores ingresados por el usuario que en este caso es val1 y val2
document.write(resultado); //En esta ultima linea imprime en la pagina el valor de la variable resultado.
