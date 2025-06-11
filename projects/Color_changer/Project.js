const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
    console.log(button); // Debug: check if buttons are selected
    button.addEventListener('click', function(e) {
        console.log(e); // Debug: full event object
        console.log(e.target); // Debug: clicked element

        if (e.target.id === 'grey') {
            body.style.backgroundColor = 'grey';
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = 'white';
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = 'yellow';
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = 'blue';
        }
    });
});
