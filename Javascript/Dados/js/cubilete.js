"use strict";

var tiradas = [0,0,0,0,0,0,0,0,0,0,0];
var timer;

function lanzarUnDado(idDado) {
  var dado = document.getElementById(idDado);
  var num = Math.floor(Math.random()*6)+1;
  dado.src = "images/dado"+num+".png";
  return num;
}

function imprimir(suma){
  var resultado = document.getElementById(suma);
  resultado.innerHTML = tiradas[suma-2];
}

function lanzarDados()
{
  var suma = lanzarUnDado("dado1") + lanzarUnDado("dado2");
  //var suma2 = Math.floor(Math.random()*11)+2;

  //Resto 2 porque el arreglo va de 2 a 12
  tiradas[suma-2]++;

  imprimir(suma);
  //¿¿¿los contadores de suma y suma2 son lo mismo???
  //alert(num1+num2);
}

function tirarDadosMuchasVeces()
{
  for (var i = 0; i < document.getElementById('veces').value; i++) {
    lanzarDados();
  }
}

function startTimer(){
  timer = setInterval('lanzarDados()', 1500);
}


function stopTimer(){
  clearInterval(timer);
}

function toggle(divId){
  var div = document.getElementById(divId);
  if (div.style.visibility == "hidden") {
    div.style.visibility = "visible";
    document.body.style.backgroundColor = "white"
  }
  else {
    div.style.visibility = "hidden";
    document.body.style.backgroundColor = "red"
  }
}

function agregarTarea(){
  var lista = document.getElementById('tareas');
  var nuevaTarea = document.getElementById('tarea').value;
  var item = document.createElement('li');
  item.innerHTML = nuevaTarea;
  lista.appendChild(item);
}
