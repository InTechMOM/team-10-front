const btnDocente = document.querySelector('#seleccionDocente');
const btnEstudiante = document.querySelector('#seleccionEstudiante');
const btnIngresar = document.querySelector('#ingresar');

const usuario = {
	email: '',
	soyEstudiante: false,
	soyProfesor: false,
};

btnDocente.onclick = function (e) {
	e.preventDefault();
	usuario.email = document.querySelector('#email').value;
	usuario.soyProfesor = true;
	usuario.soyEstudiante = false;
};

btnEstudiante.onclick = function (e) {
	e.preventDefault();
	usuario.email = document.querySelector('#email').value;
	usuario.soyEstudiante = true;
	usuario.soyProfesor = false;
};

btnIngresar.onclick = function (e) {
	e.preventDefault();
	let chanceDeError = Math.random() > 0.5;
	if (chanceDeError) {
		alert('Error al ingresar, intente nuevamente');
		return;
	}
	if (usuario.soyEstudiante) {
		window.location.href = 'bienvenidoestudiante.html';
	}
	if (usuario.soyProfesor) {
		window.location.href = 'docente.html';
	}
};