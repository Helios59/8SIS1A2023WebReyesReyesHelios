// JS es multiparadigmico y vamos a iniciar a la programacion por funciones.

function validar(formulario){
    // Hay varias formas para poder obtener los parametros del formulario.
    if(formulario.nombre.value.length <= 3){
        alert("Escriba mas de 3 caracteres en el campo nombre");
        formulario.nombre.focus();
    }
}

