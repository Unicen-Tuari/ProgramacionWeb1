/* Mi codigo de Javascript que tira dados.
*/
"use strict";

function Dado (_name) {
 this.name = _name;
 this.value = 1;

 /*
 Esta funcion tira el dado y actualiza la imagen.
 Estamos creando una funcion por cada objeto.
 */
 this.Tirar = function() {
    this.value = Math.floor((Math.random() * 6) + 1);
    document.getElementById(this.name).src = "images/dado"+this.value+".png";
    return this.value;
 };
};

function Cubilete() {
  this.dado1 = new Dado("dado1");
  this.dado2 = new Dado("dado2");
  this.Tirar = function() {
    this.dado1.Tirar();
    this.dado2.Tirar();
  };
  this.GetSum = function() {
    return this.dado1.value + this.dado2.value;
  };
};

var cuenta = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//variable donde guardar los resultados temporales

var cubilete = new Cubilete();

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
