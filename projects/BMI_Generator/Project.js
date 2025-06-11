const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        result.textContent = 'Please enter valid height and weight values.';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `Your BMI is <strong>${bmi}</strong>`;
    }
});
