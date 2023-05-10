console.log("hola");

const urlYouTube = document.getElementById ('youtubeLink');
const validateButton = document.getElementById ('checkCircle');
const messageError = document.getElementById ('resultadoErrorLink');

validateButton.addEventListener('click', checkCircle()); {
  const urlRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
  const url = urlYouTube.value.trim();

  if (urlRegex.test(url)) {
    resultMessage.innerText = 'Valid YouTube URL';
    resultMessage.classList.remove('error');
  } else {
    resultMessage.innerText = 'Invalid YouTube URL';
    resultMessage.classList.add('error');
  }
};
