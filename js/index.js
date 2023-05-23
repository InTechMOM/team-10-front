const btnDocente = document.querySelector('#seleccionDocente');
const btnEstudiante = document.querySelector('#seleccionEstudiante');
const btnIngresar = document.querySelector('#ingresar');

const usuario = {
	email: '',
	soyEstudiante: false,
	soyDocente: false,
};

btnDocente.onclick = function (e) {
	e.preventDefault();
	usuario.email = document.querySelector('#email').value;
	usuario.soyDocente = true;
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
	usuario.soyDocente = false;
	this.style.backgroundColor = 'grey';
	this.style.borderStyle = 'inset';
	btnDocente.style.backgroundColor = '#26f1c6';
	btnDocente.style.borderStyle = 'outset';
};

btnIngresar.onclick = function (e) {
	e.preventDefault();
	fetch('https://team-10-back.onrender.com/api/login', {
		method: 'POST',
		body: JSON.stringify({
			email: usuario.email,
			rol: usuario.soyEstudiante ? 'Soy Estudiante' : 'Soy Docente',
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((res) => {
		if (res.status === 200) {
			const queryParamEmail = `email=${usuario.email}`;
			if (usuario.soyEstudiante) {
				console.log('Soy Estudiante');
				window.location.href =
					'./pages/estudiante.html?' + queryParamEmail;
			} else if (usuario.soyDocente) {
				window.location.href =
					'./pages/docente.html?' + queryParamEmail;
			}
		} else {
			alert('Error al ingresar, intente nuevamente');
		}
	});
};