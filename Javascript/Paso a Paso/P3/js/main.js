/* Mi codigo de Javascript que tira dados.
*/
"use strict";

function TirarDados() {
    //genera dos numeros al azar y cambia las fuentes de las imagenes
    var d1 = Math.floor((Math.random() * 6) + 1);
    var d2 = Math.floor((Math.random() * 6) + 1);
    alert("Dados: "+d1 + ", "+d2);
}
