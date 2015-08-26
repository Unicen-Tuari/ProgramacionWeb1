/* Mi codigo de Javascript que tira dados.
*/
"use strict";

function Dado (name) {
 var value = 1;
 return {
   getValue: function() {return value;},
   Tirar: function() {
     value = Math.floor((Math.random() * 6) + 1);
     document.getElementById(name).src = "images/dado"+value+".png";
   }
 }
};

/*
Esta funcion tira el dado y actualiza la imagen.
Estamos creando una funcion por cada objeto.
*/

function Cubilete() {
  this.dado1 = new Dado("dado1");
  this.dado2 = new Dado("dado2");
};


Cubilete.prototype.Tirar = function() {
  this.dado1.Tirar();
  this.dado2.Tirar();
};

Cubilete.prototype.GetSum = function() {
  return this.dado1.getValue() + this.dado2.getValue();
};

var cubilete = new Cubilete();

var cuenta = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//variable donde guardar los resultados temporales

function TirarDados() {
    //genera dos numeros al azar y cambia las fuentes de las imagenes
    cubilete.Tirar();
    //calcular suma
    var sum = cubilete.GetSum();
    //contar la suma, tener en cuenta que el arreglo empieza en 0
    cuenta[sum-1]++;
    //concatenar las cantidad de veces que salio cada suma
    var cadena = "";
    for(var c = 0; c<12; c++)
      cadena += ""+ cuenta[c] + " ";
    //mostrar en el html
    document.getElementById("resultado").innerHTML = cadena;
}

//Tira dados muchas veces
function TirarMuchosDados(cantTiradas) {
  for(var t = 0; t< cantTiradas;t++)
    TirarDados();
}

var tirando_dados = false;

function EmpezarTiradas() {
  tirando_dados = true;
  TirarConDelay();
}

//Tira dados periodicamente
function TirarConDelay() {
  if(tirando_dados) {
    TirarDados();
    window.setTimeout("TirarConDelay()", 500);
  }
}

function FrenarTiradas() {
  tirando_dados = false;
}
