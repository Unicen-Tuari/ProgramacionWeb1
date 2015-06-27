window.addEventListener('load', inicializarEventos, false);

function inicializarEventos() {
    var text = document.getElementById('numdia');
	text.addEventListener('input', doDia, false);
}

function nombreDia(numDia) {
	var nombres = ['Lunes', 'Martes', 'Miercoles', 'Jueves',
                   'Viernes' ,'Sabado' ,'Domingo'];
	return nombres[numDia-1];
}

function doDia() {
	var salida, numDia;
	salida = document.getElementById('resultado');
	numDia = document.getElementById('numdia');
	numDia = parseInt(numDia.value);
	if(!isNaN(numDia) && numDia<=7 && numDia>=1)  
		salida.innerHTML = nombreDia(numDia);
	else
		salida.innerHTML = "Error en formato de datos";
}