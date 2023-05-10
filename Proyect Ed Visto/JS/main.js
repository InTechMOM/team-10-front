console.log("hola");

const urlInput = document.getElementById('youtubeLink');
const validateButton = document.getElementById('submit');
const resultMessage = document.getElementById('results');


validateButton.addEventListener('click', function() {
  const urlRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
  const url = urlInput.value.trim();

  if (urlRegex.test(url)) {
    resultMessage.innerText = 'Ok';
    resultMessage.classList.remove('error');
    
  } else {
    resultMessage.innerText = 'Invalid Link';
    resultMessage.classList.add('error');
  }

});



