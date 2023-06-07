/*
    Las variables que se ocupan dentro de JS son 3

    var --> de acuerdo a EJS6 esta siendo sustituida, pero es la
    de uso mas comun para determinar una variable, es de acceso
    publico.

    let --> es una variable protegida que solo funciona dentro de una funcion o
    declaracion de codigo.

    const --> la cual es un valor constante en todo el documento.

let x = "x";
if(true){
    const x = "y";
    console.log(x);
}

La funcion flecha es una funcion en JS que ha diferencia de una funcion normal
no genera su propio contexto, osea no maneja la palabra reservada (this),
y no necesita de un return.



function sumar(n1,n2){
    return n1+n2;
}

/*
 cuando ocupamos este tipo de comilla `` es
 para poder mandar a llamar elementos de nombres 
 de funciones que van a ser evaluados y/o incorporar
 etiquetas de htl y css en JS.

console.log(`Vamos a sumar 3 y 4: ${sumar(3,4)}`);

    Una funcion flecha tiene la siguiente estructura:

    "cadena_que_queremos" -> id, clase, name, atributo

    '' y "" es oara el uso de id, clases, name

    `` es para incorporar codigo html e invocar funciones de JS


const sumar = (n1, n2) => n1+n2;

console.log(`Vamos a sumar 5 y 6: ${sumar(5,6)}`);

// que pasaria si solo necesitamos un parametro.
const cuadradoFuncionFlecha = n1 => n1**n2;

console.log(`Vamos a hacer una funcion cuadratica de 7: ${cuadradoFuncionFlecha(7)}`);

*/

const razasDePerros = [

    "Gran Danes",
    "Pastor Aleman",
    "Chihuaha",
    "Belga",
    "Pitbull",
    "Dalmata"
];

// recocrremos el arreglo

/*
for(let indice = 0; indice < razasDePerros.length; indice++){
    console.log(razasDePerros[indice]);
}
*/

//ejemplo for of. Este tipo de for es mas eficiente porque se recorre de uno en uno

/*
for(const raza of razasDePerros){
    console.log(raza);
}
*/

// si no se le pone el indice, va a iterar y retorna todos los posibles valores por cada indice.
/*
for(const indice in razasDePerros){
    console.log(razasDePerros[indice]);
    //console.log(razasDePerros);
}
*/

/*
ForEach -> es iterar sobre los elementos del arreglo que no devuelven nada

parametro, valor del indice, y el arreglooriginal osea raza de perros.
es un callback. funncion que se manda a llamar a si misma.

razasDePerros.forEach((raza, indice, arregloOriginal) => console.log(raza));

razasDePerros.forEach((raza) => console.log(raza));

*/

/*
    Funcion MAP se encarga de iterar sobre los elementos de un arreglo y regresar
    un nuevo arreglo direfente con el cual podemos hacer operaciones.


const razasDePerrosEnMayusculas = razasDePerros.map((raza, indice, arregloOriginal) => 
console.log(raza.toUpperCase()));

const razasDePerrosEnMayusculas = razasDePerros.map((raza) => 
console.log(raza.toUpperCase()));
*/

/*
    FIND nos permite uscar un elemento dentro del arreglo, y si lo encuentra,
    lo regresa y sino lanza un "undefinend".

if(razasDePerros.find((raza, indice, arregloOriginal) => raza === "Chihuahua")){
    console.log("La raza se encuentra dentro del arreglo");
    console.log(razasDePerros);
} else{
    //hay que meterlo
    razasDePerros.push("Chihuaha");
    console.log("Se agrego la raza en el arreglo");
    console.log(razasDePerros);
}
*/

/*
    FINDINDEX es similar a la usqueda, pero en lugar de regresa el elemento,
    regresa su indice y si no lo encuentra nos devuelve un -1, esta funcion
    particularmente es util si queremos modificar el elemento original dentro de un arreglo.

const indiceChihuaha = razasDePerros.findIndex((raza, indice, arregloOriginal) => raza === "Chihuaha");
if(indiceChihuaha > -1 ){
    //el resultado esperado pq si esta dentro del arreglo
    console.log(razasDePerros[indiceChihuaha]);
    //aparte voy agregar que diga que la raza es pequela
    razasDePerros[indiceChihuaha]+= " (Raza de perros pequeña y escandalosa)";
    console.log(razasDePerros[indiceChihuaha]);
    console.log(razasDePerros);
} else{
    console.log("no esta")
}
*/
