/*Ejercicio 6:
Escribir un script que muestre la posición de la primera vocal de un texto introducido
 por teclado. Por ejemplo: perro = “e” es la letra Nº2 ; árbol = “a” es la letra Nº1.*/
 let texto  =   prompt('Ingrese un texto para identificar la primera vocal');
 let long   =   texto.length;
 let min = texto.toLocaleLowerCase();
 let vowel  =   "";
 //console.log(long);
 for(let i=0; i<=(long-1); i++) {
    min[i].toLocaleLowerCase()
    if (min[i]=="a"||min[i]=="e"||min[i]=="i"||min[i]=="o"||min[i]=="u") {
        vowel   = min[i]
       document.write(`La primera vocal se encuentra en la posicion ${i} y es la letra " ${vowel} "`);
        break;
    }
};