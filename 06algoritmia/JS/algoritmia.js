//PROBLEMA 2
function problema2(){
    //lo primero que necesitamos es obtener los campos de texto
    var p2_x1 = document.querySelector('#p2-x1').
    value;

    var p2_x2 = document.querySelector('#p2-x2').
    value;

    var p2_x3 = document.querySelector('#p2-x3').
    value;

    var p2_x4 = document.querySelector('#p2-x4').
    value;

    var p2_x5 = document.querySelector('#p2-x5').
    value;


    var p2_y1 = document.querySelector('#p2-y1').
    value;

    var p2_y2 = document.querySelector('#p2-y2').
    value;

    var p2_y3 = document.querySelector('#p2-y3').
    value;

    var p2_y4 = document.querySelector('#p2-y4').
    value;

    var p2_y5 = document.querySelector('#p2-y5').
    value;

    //construimos el vector

    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    //ordenar los vectores

    v1 = v1.sort(function(a, b){
        return b-a;
    
    });

    v2 = v2.sort(function(a, b){
        return b-a;
    
    });

    //vamos a realizar el produto escalar

    var p2_prodcuto = 0;

    for(var i = 0; i < v1.length; i++){
        p2_prodcuto += v1 [i]*v2[i];
    }

    document.querySelector('#p2-output').textContent
     = 'Producto Escalar Minimo. ' + p2_prodcuto;
}

//PROBLEMA 1
function problema1() {
  var pa = document.getElementById('p1-input').value;
  var parray = pa.split(' ');
  var painvertido = parray.reverse().join(' ');
  document.getElementById('p1-output').textContent = painvertido;
}

//PROBLEMA 3
function problema3() {
  var inputPalabras = document.getElementById('p3-input').value;
  var palabras = inputPalabras.split(',');

  // Verificar si hay palabras en minúscula o con espacios
  var hayMinusculas = palabras.some(function(palabra) {
    return /[a-z]/.test(palabra);
  });

  if (hayMinusculas || inputPalabras !== inputPalabras.toUpperCase()) {
    alert("Por favor, ingrese todas las palabras en mayúsculas y sin espacios.");
    return;
  }

  var resultado = 'Palabras ingresadas: ' + palabras.join(', ');

  var palabraMasLarga = '';
  var longitudMaxima = 0;

  palabras.forEach(function(palabra) {
    var longitud = palabra.length;
    resultado += '\nLongitud de ' + palabra + ': ' + longitud;

    if (longitud > longitudMaxima) {
      longitudMaxima = longitud;
      palabraMasLarga = palabra;
    }
  });

  resultado += '\nPalabra con mayor longitud: ' + palabraMasLarga + ' (' + longitudMaxima + ' caracteres)';

  document.getElementById('p3-output').textContent = resultado;
}
