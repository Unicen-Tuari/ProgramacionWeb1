
////---------------------------------------------------------------------------------------
////---------------------------------------------------------------------------------------
////---------------     INICIALIZACION DE OJBETOS Y EVENTOS                 ---------------
////---------------------------------------------------------------------------------------
////---------------------------------------------------------------------------------------
$(document).ready(function(){

  /* Mi codigo de Javascript que tira dados.
*/
"use strict";


////---------------------------------------------------------------------------------------
////---------------------------------------------------------------------------------------
////---------------                 CLASE DADO                           ---------------
////---------------------------------------------------------------------------------------
////---------------------------------------------------------------------------------------
function Dado (_name) {
 this.name = _name;
};

Dado.prototype.value = 1;
/*
Esta funcion tira el dado y actualiza la imagen.
Estamos creando una funcion por cada objeto.
*/
Dado.prototype.Tirar = function() {
    this.value = Math.floor((Math.random() * 6) + 1);
    document.getElementById(this.name).src = "images/dado"+this.value+".png";
    return this.value;
 };


 ////---------------------------------------------------------------------------------------
 ////---------------------------------------------------------------------------------------
 ////---------------                 CLASE CUBILETE                           ---------------
 ////---------------------------------------------------------------------------------------
 ////---------------------------------------------------------------------------------------

function Cubilete() {
  this.dado1 = new Dado("dado1");
  this.dado2 = new Dado("dado2");
};


Cubilete.prototype.Tirar = function() {
  this.dado1.Tirar();
  this.dado2.Tirar();
};

Cubilete.prototype.GetSum = function() {
  return this.dado1.value + this.dado2.value;
};


////---------------------------------------------------------------------------------------
////---------------------------------------------------------------------------------------
////---------------                 CLASE TIRADOR                           ---------------
////---------------------------------------------------------------------------------------
////---------------------------------------------------------------------------------------
function Tirador() {
  this.tirando = false;
  this.cubilete = new Cubilete();
  this.cuenta = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//variable donde guardar los resultados temporales
};

//como son objetos si los miembros los creo en el prototype se modifican en todos los objetos
//si hubeiera 2 tiradores se contarian en los dos
//Tirador.prototype.cuenta = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//variable donde guardar los resultados temporales

Tirador.prototype.ActualizarVista = function () {
  var cadena = "";
  for(var c = 0; c<11; c++)
    cadena += ""+ this.cuenta[c] + " ";
  //mostrar en el html
  document.getElementById("resultado").innerHTML = cadena;
};

Tirador.prototype.Tirar = function (cantTiradas) {
  for(var t = 0; t< cantTiradas;t++) {
    this.cubilete.Tirar();
    var sum = this.cubilete.GetSum();
    this.cuenta[sum-2]++; //la minima suma posible es 2
    this.ActualizarVista();
  }
}

Tirador.prototype.EmpezarTiradas = function() {
  this.tirando = true;
  this.TirarConDelay();
}

//Tira dados periodicamente
Tirador.prototype.TirarConDelay = function () {
  if(this.tirando) {
    this.Tirar(1);
    var t = this;
    window.setTimeout(function(){t.TirarConDelay();}, 50);
  }
}

Tirador.prototype.FrenarTiradas = function () {
  this.tirando = false;
}


  // código de inicialización de eventos
  var tirador = new Tirador();

  $("#btnTirar1").click(function(){
    tirador.Tirar(1);
  })

  $("#btnTirarMuchos").click(function(){
    tirador.Tirar(1000);
  })


  $("#btnEmpezarTiradas").click(function(){
    tirador.EmpezarTiradas();
  })


  $("#btnFrenarTiradas").click(function(){
    tirador.FrenarTiradas();
  })
});
