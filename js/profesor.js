import './StudentCard.js';

fetch('../dbMock/response.json')
	.then((response) => response.json())
	.then((data) => {
		const dataToFilter = data.filter((student) => {
			return student.url !== '';
		});
		return dataToFilter;
	})
	.then((filteredData) => {
		const studentCards = filteredData
			.map(
				(student) => `
								<student-card name="${student.author.name}" lastname="${student.author.lastname}" email="${student.author.email}" video-url="${student.url}"></student-card>
							`
			)
			.join('');

		document.querySelector('#student-card-container').innerHTML =
			studentCards;
	})
	.catch((error) => {
		console.error('Error fetching data:', error);
	});