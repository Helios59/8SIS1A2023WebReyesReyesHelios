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
  var palabras = document.getElementById('p3-input').value.toUpperCase().split(',');

  if (palabras.includes(' ') || /[a-z]/.test(palabras.join(''))) {
    alert("Por favor, ingrese palabras en mayúsculas sin espacios.");
    return;
  }

  var palabraMasLarga = '';
  var maxCaracteresUnicos = 0;

  palabras.forEach(function(palabra) {
    var caracteresUnicos = new Set(palabra).size;
    if (caracteresUnicos > maxCaracteresUnicos) {
      maxCaracteresUnicos = caracteresUnicos;
      palabraMasLarga = palabra;
    }
  });

  var resultado = 'Palabras ingresadas: ' + palabras.join(', ');

  if (palabraMasLarga !== '') {
    resultado += '\nPalabra con más caracteres únicos: ' + palabraMasLarga;
    resultado += ' (' + maxCaracteresUnicos + ' caracteres únicos)';
  }

  document.getElementById('p3-output').textContent = resultado;
}
