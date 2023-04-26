const rango = document.querySelector("#rango")
const puntaje = document.querySelector("#puntaje")

rango.oninput = () => {
    puntaje.innerHTML = rango.value
}

const $person = document.querySelector(".person");

if ($miCheckbox.checked) {
    alert("Marcado");
  } else {
    alert("Desmarcado");
  }

  function validarAcceso() {
    var email = document.getElementById("email").value;
    var cargo = document.querySelector('input[name="cargo"]:checked').value;
  
    if (email === "profesor@email.com" && rol === "SoyProfesor") {
      window.location.href = "../pages/Docente.html";
    } else if (email === "estudiante@email.com" && cargo === "SoyEstudiante") {
      window.location.href = "../pages/Bienvenido-estudiante.html";
    } else {
      event.preventDefault();
    }
  }
  const emailInput = document.getElementById('email');
  const rangoInput = document.getElementsByName('cargo');
  
  formulario.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const email = emailInput.value.trim();
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  
    if (!emailRegex.test(email)) {
  
      alert('El correo electrónico ingresado no es válido');
    } else if (email === 'profesor@email.com') {
  
      if (rolInputs[0].checked) {
        alert('Bienvenido Profesor');
      } else if (rolInputs[1].checked) {
        alert('El correo electrónico ingresado solo se permite para Docentes');
      } else {
        alert('Seleccione un rol de usuario');
      }
  
    } else if (email === 'estudiante@email.com') {
      if (rolInputs[1].checked) {
        alert('Bienvenido Estudiante');
      } else if (rolInputs[0].checked) {
        alert('El correo electrónico ingresado solo se permite para Estudiantes');
      } else {   
        alert('Seleccione un tipo de usuario');
      }
    } else {
      alert('Lo siento, su correo no es correcto o no se encuentra en nuestra base de datos');
    }
  });