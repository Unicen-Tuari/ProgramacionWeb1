var x;
x=$(document);  //busco un objeto predefinido en jquery
x.ready(inicializarEventos);  //agrego el evento

function inicializarEventos()
{
  var x;
  x=$("#boton1");//obtengo boton
  x.click(doDia); //seteo el "onClick"
}

function presionBoton()
{
  alert("Se presionó el botón");
}

function nombreDia(numDia) {
	var nombre;
	switch (numDia) {
			case 1: nombre = 'Lunes';
					break;
			case 2: nombre = 'Martes';
					break;
			case 3: nombre = 'Miercoles';
					break;
			case 4: nombre = 'Jueves';
					break;
			case 5: nombre = 'Viernes';
					break;
			case 6: nombre = 'Sabado';
					break;
			case 7: nombre = 'Domingo';
					break;
		}
	return nombre;
}

function doDia() {
	var salida, numDia;
	salida = $("#resultado"); //donde voy a mostrar el resultado
	numDia = $("#numdia");
	numDia = parseInt(numDia.val());  //leo un valor
	if (isNaN(numDia) )
		salida.html('Error en formato de numero.'); //muestro resultado
	else {
		salida.html(nombreDia(numDia));//muestro resultado
	}
}
