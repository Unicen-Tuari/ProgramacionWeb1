/* Mi codigo de Javascript que tira dados.
*/
"use strict";

function TirarDados() {
    //genera dos numeros al azar y cambia las fuentes de las imagenes
    var d1 = Math.floor((Math.random() * 6) + 1);
    document.getElementById("dado1").src = "images/dado"+d1+".png";
    var d2 = Math.floor((Math.random() * 6) + 1);
    document.getElementById("dado2").src = "images/dado"+d2+".png";
}
