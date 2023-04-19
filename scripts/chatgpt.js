const form = document.querySelector('form');
const usernameInput = document.querySelector('input[type="text"]');
const opcion = document.querySelector('input[type="checkbox"]');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const username = usernameInput.value.trim();
  
  
  
  if (username === '') {
    alert('Por favor ingrese su usuario');
    return;
  }
  
  if (opcion.checked) {
    window.location.href ="../pages/perfilEstudiante.html";
  }else{
    window.location.href ="../pages/perfilProfesor.html";
  }
   
});