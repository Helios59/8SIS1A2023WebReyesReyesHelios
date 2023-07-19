//vamos a crear un servidor con express

var express = require('express');

//vamos a realizar una referencia al constructor de objetos de express para tener acceso a sus metodos.

var app = express();

/*una vez que tenemos el servidor inicializado debemos de manejar sus rutas para poder
atender las peticiones por parte de los clentes.*/

//rutas de acceso
app.get('/', function(req, res) {
    //cuando entre a esta ruta, que aparezca lo siguiente
    res.send('Ruta de INICIO');
});

//inicializar el servidor
app.listen(3000, function(req, res) {
    console.log('Servidor inicializado en el puerto 3000');
});