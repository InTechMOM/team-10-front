const urlInput = document.getElementById('youtubeLink');
const validateButton = document.getElementById('submit');
const resultMessage = document.getElementById('results');
const checkCircle = document.querySelector('.checkCircle');

validateButton.addEventListener('click', function () {
	const urlRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
	const url = urlInput.value.trim();

	if (urlRegex.test(url)) {
		checkCircle.innerHTML = '&#10003;';
		checkCircle.classList.add('success');
		checkCircle.classList.remove('error');
	} else {
		checkCircle.innerHTML = '&#10007;';
		checkCircle.classList.add('error');
		checkCircle.classList.add('error');
	}
});