/**
 * Created by darioh on 26/12/14.
 */
/* INICIALIZANDO VARIABLES PARA OBTENER LOS PAQUETES DE.
EXPRESS Y MARIASQL PARA PODER INGRESAR Y UTILIZAR TODAS.
SUS FUNCIONES.*/

var express = require('express');
var maria = require('mariasql');
var app = express();

//Linea de codigo que une el path actual desde donde sirve
//node con express y le une "/public"
//PERO NO FUNCIONA.
app.use("/public",express.static(__dirname+'/public'));
//-------------------------------------------------------------
//Ni bien llega a lo que es la raiz que es el dominio de nuestro navegador
//envie un response.
app.get('/', function(req, res){
    res.sendfile("index.html");
});

//Creo un servidor y lo pongo a escuchar por el puerto 7000
app.listen(7000, function(){
    console.log("Servidor iniciado en el puerto 7000");
});
