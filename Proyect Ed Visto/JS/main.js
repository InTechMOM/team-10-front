const rango = document.querySelector("#rango")
const puntaje = document.querySelector("#puntaje")

rango.oninput = () => {
    puntaje.innerHTML = rango.value
}

  
  
const form = document.querySelector('form');
const correo = document.querySelector('#email');
const SoyProfesor = document.querySelector('#SoyProfesor');
const SoyEstudiante = document.querySelector('#SoyEstudiante');

correo.focus();
  
form.addEventListener('click', function(e) {
  e.preventDefault();
  const correoValue = correo.value;

  if (!isValidEmail(correoValue)) {
    alert('Por favor, ingrese un correo electrónico válido.');
    return;
  }

  if (e.target === SoyEstudiante && correoValue !== "m@gmail.com") {
    alert('El correo electrónico ingresado no corresponde al rol seleccionado.');
    return;
  }

  if (e.target === SoyProfesor && correoValue !== "s@gmail.com") {
    alert('El correo electrónico ingresado no corresponde al rol seleccionado.');
    return;
  }

  // Redireccionar a la página correspondiente
  if (e.target === SoyProfesor) {
    window.location.href = '.pages/Docente.html';
  } else if (e.target === SoyEstudiante) {
    window.location.href = 'pages/Bienvenido-estudiante.html';
  }
});

function isValidEmail(email) {

  // Expresión regular para validar correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function agregarVideo() {
    const link = document.getElementById('youtube-link').value;
    
    // Expresión regular para validar enlaces de YouTube
    const regex = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    
    // Si el enlace es válido
    if (regex.test(link)) {
      // Extraemos el ID del video
      const videoID = link.split('v=')[1];
      
      // Creamos el iframe para insertar el video en la página
      const iframe = document.createElement('iframe');
      iframe.setAttribute('src', `https://www.youtube.com/embed/${videoID}`);
      iframe.setAttribute('width', '560');
      iframe.setAttribute('height', '315');
      iframe.setAttribute('frameborder', '0');
      
      // Insertamos el iframe en la página
      const container = document.getElementById('video-container');
      container.innerHTML = '';
      container.appendChild(iframe);
    } else {
      // Si el enlace no es válido, mostramos un mensaje de error
      alert('Por favor, ingresa un enlace de YouTube válido');
    }
  }