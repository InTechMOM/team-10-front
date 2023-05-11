const studentCards = document.querySelectorAll('.student-container');

studentCards.forEach((student, index) => {
    student.classList.add('student-number-' + (index +1));
    const dropdownButton = student.querySelector('.dropdown');
    dropdownButton.addEventListener('click', function () {
        const dropdown = student.querySelector('.bottom-container');
        if (dropdown.style.display === 'none') {
            dropdown.style.display = 'block';
        } else {
            dropdown.style.display = 'none';
        }
    }
    );
});