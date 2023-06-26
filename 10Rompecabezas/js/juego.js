/*
Vamos a crear un arreglo para contener las instrucciones.
*/

var instrucciones = ["Utiliza las flechas para mover las piezas",
 "Ordenar las piezas hasta alcanzar la imagen objetivo"];

//Vamos a crear una variable para guardar los movimientos.

var movimientos = [];

/*
Vamos a crear una matriz que represente las posiciones del rompecabezas.
*/

var rompe = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

var rompeCorrecta = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//necesito una variable para guardar la posicion de la pieza vacía.

var filaVacia = 2;
var columnaVacia = 2;

//vamos a hacer una funcion para mostrar las instrucciones.

function mostrarInstrucciones (instrucciones){
    for(var i = 0; i < instrucciones.length; i++){
        mostrarInstruccionesEnLista(instrucciones[i],
            "lista-instrucciones");
    }
}

function mostrarInstruccionesEnLista (instruccion, idLista){
    var ul = document.getElementById(idLista);
    var li = document.createElement("li");
    li.textContent = instruccion;
    ul.appendChild(li);
}

//vamos a crear una funcion para saber cual fue el utimo movimietno.

function agregarUltimoMovimiento (direccion) {
    movimientos.push(direccion);
}

// una funcion para saber si gane.

function checarSiGano (){
    for(var i = 0; i < rompe.length; i++){
        for(var j = 0; j < rompe[i].length; j++){
            //comparar
            var rompeActual = rompe[i][j];
            //El operador !== significa completamente diferente
            if(rompeActual !== rompeCorrecta[i][j]){
                return false;
            }
        }
    }
    return true;
}

//funcion para mostrar que gane
function mostrarCartelGanador(){
    if(checarSiGano()){
        alert("Wiiii a mimir ya gane");
    }
    return false;
}

//vamos a crear una funcion que se encargue del intercambio de las posiciones del rompecabezas.
// arreglo[0][0]

arreglo[1][2] = arreglo[0][0]
arreglo[0][0] = arreglo[1][2]

function intercambiarPosicionesRompe(filaPos1, columnaPos1, filaPos2, columnaPos2){
    var pos1 = rompe[filaPos1][columnaPos1];
    var pos2 = rompe[filaPos2][columnaPos2];

    rompe[filaPos1][columnaPos1] = pos2;
    rompe[filaPos2][columnaPos2] = pos1;

}

//Tengo que saber donde esta la vacía.
function actualizarPosicionVacia (nuevaFila, nuevaColumna){
    filaVacia = nuevaFila;
    columnaVacia = nuevaColumna;
}

//Tenemos que crear una funcion que se encargue de saber si la
// posicion es correcta(que no se salga de lo correcto o algo asi).
function posicionValida(fila,columna){
    return (fila >= 0 && fila <= 2 && columna >= 0 && columna <= 2);
}

//Ahora viene la parte de movimiento que es por parte de las flechas
//hay que identificar el movimiento, arriba es 38, abajo es 40,
//izquierda es 37 y derecha es 39 (esos son los posibles movimientos que existen).

function moverEnDireccion(direccion){
    var nuevaFilaPiezaVacia;
    var nuevoaColumnaPiezaVacia;

    //si se mueve hacia abajo
    if(direccion === codigosDireccion.ABAJO){
        nuevaFilaPiezaVacia = filaVacia + 1;
        nuevoaColumnaPiezaVacia = columnaVacia;
    }
    //si se mueve hacia arriba.
    else if(direccion === codigosDireccion.ARRIBA){
        nuevaFilaPiezaVacia = filaVacia - 1;
        nuevoaColumnaPiezaVacia = columnaVacia;
    }

    else if(direccion === codigosDireccion.IZQUIERDA){
        nuevaFilaPiezaVacia = filaVacia;
        nuevoaColumnaPiezaVacia = columnaVacia - 1;
    }

    else if(direccion === codigosDireccion.DERECHA){
        nuevaFilaPiezaVacia = filaVacia;
        nuevoaColumnaPiezaVacia = columnaVacia + 1;
    }

    //checar si la nueva posicion es valida y si no intercambiarla
    if(posicionValida(nuevaFilaPiezaVacia, nuevoaColumnaPiezaVacia)){
        intercambiarPosiciones(filaVacia, columnaVacia, nuevaFilaPiezaVacia, nuevoaColumnaPiezaVacia);
        actualizarPosicionVacia(nuevaFilaPiezaVacia, nuevoaColumnaPiezaVacia);
        //agregar el ultimo movimiento.
        agregarUltimoMovimiento(direccion);
    }
}

//Aqui van mis codigos.
var codigosDireccion = {
    IZQUIERDA : 37,
    ARRIBA : 38,
    DERECHA : 39,
    ABAJO : 40
};

function intercambiarPosiciones(fila1, columna1, fila2, columna2){
    var pieza1 = rompe[fila1][columna1];
    var pieza2 = rompe[fila2][columna2];
    intercambiarPosicionesRompe(fila1, columna1, fila2, columna2);
    intercambiarPosicionesDOM('pieza' + pieza1,
    'pieza' + pieza2);

}

function intercambiarPosicionesDOM(idPieza1, idPieza2){
    var elementoPieza1 = document.getElementById(idPieza1);
    var elementoPieza2 = document.getElementById(idPieza2);

    var padre = elementoPieza1.parentNode;
    //lapieza vacia es el padre porque es la que se mueve, entonces me va a devolver la posicion de la pieza vacia.

    var cloneElemento1 = elementoPieza1.cloneNode(true);
    var cloneElemento2 = elementoPieza2.cloneNode(true);
    padre.replaceChild(cloneElemento1, elementoPieza2);
    padre.replaceChild(cloneElemento2, elementoPieza1);
}

//necesito actualizar los movimientos.
function actualizarUltimoMovimiento(direccion){
    var ultimoMov = document.getElementById('flecha');
    switch(direccion){
        case codigosDireccion.ARRIBA:
            ultimoMov.textContent = '↑';
            break;
        case codigosDireccion.ABAJO:
                ultimoMov.textContent = '↓';
            break;
        case codigosDireccion.DERECHA:
                    ultimoMov.textContent = '→';
             break;
        case codigosDireccion.IZQUIERDA:
                        ultimoMov.textContent = '←';
            break;
    }
}

function mezclarPiezas (veces){
    if(veces <= 0 ){
        return;
    }

    var direcciones = [codigosDireccion.ABAJO, codigosDireccion.ARRIBA, codigosDireccion.DERECHA,
    codigosDireccion.IZQUIERDA];

    var direccion = direcciones[Math.floor(Math.random () * direcciones.length)];

    moverEnDireccion(direccion);

    setTimeout(function(){
        mezclarPiezas(veces-1);
    }, 100);
}

//vamos a capturar las teclas que ha ingresado el jugador.
function capturarTeclas (){
    document.body.onkeydown = (function(evento){
        if(evento.which === codigosDireccion.ABAJO || 
        evento.which === codigosDireccion.ARRIBA ||
        evento.which === codigosDireccion.IZQUIERDA ||
        evento.which === codigosDireccion.DERECHA){
            moverEnDireccion(evento.which),
            actualizarUltimoMovimiento(event.which);

            var gano = checarSiGano;
            if(gano){
                setTimeout(function(){
                    mostrarCartelGanador();
                }, 500);
            }
            evento.preventDefault;
        }
    });
}

function iniciar(){
    mezclarPiezas(30);
    capturarTeclas();
}

//ejectutamos las funciones.
iniciar();
mostrarInstrucciones(instrucciones);