// JS es multiparadigmático y vamos a iniciar con programación por funciones.

function validar(formulario) {
    // Hay varias formas de obtener los parámetros del formulario.
    if (formulario.nombre.value.length <= 3) {
        alert("Escriba más de 3 caracteres en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    var checkOk = "qwertyuiopasdfghjklñzxcvbnm" +
        "QWERTYUIOPASDFGHJKLÑZXCVBNM ";

    var checkString = formulario.nombre.value;

    var todoEsValido = true;

    for (var i = 0; i < checkString.length; i++) {
        var ch = checkString.charAt(i);
        var isLetter = false;
        for (var j = 0; j < checkOk.length; j++) {
            if (ch === checkOk.charAt(j)) {
                isLetter = true;
                break;
            }
        }
        if (!isLetter) {
            todoEsValido = false;
            break;
        }
    }

    if (!todoEsValido) {
        alert("Escriba únicamente letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    checkOk = "1234567890";
    checkString = formulario.edad.value;
    todoEsValido = true;

    for (var i = 0; i < checkString.length; i++) {
        var ch = checkString.charAt(i);
        var isNumber = false;
        for (var j = 0; j < checkOk.length; j++) {
            if (ch === checkOk.charAt(j)) {
                isNumber = true;
                break;
            }
        }
        if (!isNumber) {
            todoEsValido = false;
            break;
        }
    }

    if (!todoEsValido) {
        alert("Escriba únicamente números en el campo edad");
        formulario.edad.focus();
        return false;
    }

    var txt = formulario.email.value;
    var emailRegex = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

    alert("El email es " + (emailRegex.test(txt) ? "" : "no ") + "válido");

    return emailRegex.test(txt);
}

