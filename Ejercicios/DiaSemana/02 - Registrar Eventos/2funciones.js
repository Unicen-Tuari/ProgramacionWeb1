window.addEventListener('load', inicializarEventos, false);

function inicializarEventos() {
    var text = document.getElementById('numdia');
	text.addEventListener('input', doDia, false);
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
	salida = document.getElementById('resultado');
	numDia = document.getElementById('numdia');
	numDia = parseInt(numDia.value);
	salida.innerHTML = nombreDia(numDia);
}