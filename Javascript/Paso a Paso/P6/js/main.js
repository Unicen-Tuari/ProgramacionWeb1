/* Mi codigo de Javascript que tira dados.
*/
"use strict";

var cuenta = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//variable donde guardar los resultados temporales

function TirarDados() {
    //genera dos numeros al azar y cambia las fuentes de las imagenes
    var d1 = Math.floor((Math.random() * 6) + 1);
    document.getElementById("dado1").src = "images/dado"+d1+".png";
    var d2 = Math.floor((Math.random() * 6) + 1);
    document.getElementById("dado2").src = "images/dado"+d2+".png";
    //calcular suma
    var sum = d1+d2;
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
