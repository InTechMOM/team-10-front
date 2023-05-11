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
	this.style.backgroundColor = 'grey';
	this.style.borderStyle = 'inset';
	btnEstudiante.style.backgroundColor = '#26f1c6';
	btnEstudiante.style.borderStyle = 'outset';
};

btnEstudiante.onclick = function (e) {
	e.preventDefault();
	usuario.email = document.querySelector('#email').value;
	usuario.soyEstudiante = true;
	usuario.soyProfesor = false;
	this.style.backgroundColor = 'grey';
	this.style.borderStyle = 'inset';
	btnDocente.style.backgroundColor = '#26f1c6';
	btnDocente.style.borderStyle = 'outset';
};

btnIngresar.onclick = function (e) {
	e.preventDefault();
	let chanceDeError = Math.random() > 0.5;
	if (chanceDeError) {
		alert('Error al ingresar, intente nuevamente');
	}
	if (usuario.soyEstudiante) {
		window.location.href = './pages/bienvenido-estudiante.html';
	}
	if (usuario.soyProfesor) {
		window.location.href = './pages/profesor.html';
	}
};