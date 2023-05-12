const videoInput = document.querySelector('#youtubeLink');
const calificacion = document.querySelector('#calificacion');
const puntajePromedioDisplay = document.querySelector('#puntaje');
const observaciones = document.querySelector('#observaciones');
const validateButton = document.getElementById('submit');
const checkCircle = document.querySelector('.checkCircle');

// aca en realidad deberia hacer un GET del estudiante que ingreso desde el index
fetch('../dbMock/response.json')
	.then((response) => response.json())
	.then((data) => {
		const thisStudent = data.filter((student) => {
			// Cambiar Sofia por Buni para probar un usuario que no subio video
			return student.author.name === 'Sofia';
		});
		handleVideoInput(thisStudent);
	})
	.catch((error) => {
		console.error('Error fetching data:', error);
	});

function handleVideoInput(student) {
	if (student[0].url !== '') {
		videoInput.value = student[0].url;
		videoInput.disabled = true;
		validateButton.disabled = true;
		validateButton.classList.add('success');
		checkCircle.innerHTML = '&#10003;';
		if (student[0].skills.communication !== 0) {
			calificacion.value = Math.round(
				(student[0].skills.communication +
					student[0].skills.collaboration +
					student[0].skills.creativity +
					student[0].skills.critical_thinking) /
					4
			);
			puntajePromedioDisplay.innerHTML = calificacion.value;
		}
		if (student[0].comments !== '') {
			observaciones.innerHTML = student[0].comments;
		}
	} else {
		puntajePromedioDisplay.innerHTML = 'Todavia no has subido un video';
		videoInput.value = '';
		validateButton.addEventListener('click', function () {
			const urlRegex =
				/^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
			const url = videoInput.value.trim();

			if (urlRegex.test(url)) {
				checkCircle.innerHTML = '&#10003;';
				checkCircle.classList.add('success');
				checkCircle.classList.remove('error');
				validateButton.disabled = true;
				// aca deberia hacer el PUT a la API para actualizar la base de datos con el video
				alert('Video validado y enviado');
			} else {
				checkCircle.innerHTML = '&#10007;';
				checkCircle.classList.add('error');
				checkCircle.classList.add('error');
			}
		});
	}
}