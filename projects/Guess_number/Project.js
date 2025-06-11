let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = [];
let remainingGuesses = 10;

const submit = document.querySelector('#submitGuess');
const input = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const resultParas = document.querySelector('.resultParas');

submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = Number(input.value);

    if (!guess || guess < 1 || guess > 100) {
        lowOrHi.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    guesses.push(guess);
    guessSlot.textContent = guesses.join(', ');
    remainingGuesses--;
    remaining.textContent = remainingGuesses;

    if (guess === randomNumber) {
        lowOrHi.textContent = `Congratulations! ${guess} is correct! 🎉`;
        lowOrHi.style.color = 'green';
        endGame();
    } else if (remainingGuesses === 0) {
        lowOrHi.textContent = `Game Over! The number was ${randomNumber}.`;
        lowOrHi.style.color = 'red';
        endGame();
    } else {
        lowOrHi.textContent = guess < randomNumber ? 'Too low!' : 'Too high!';
        lowOrHi.style.color = 'blue';
    }

    input.value = '';
    input.focus();
});

function endGame() {
    input.disabled = true;
    submit.disabled = true;

    const restartBtn = document.createElement('button');
    restartBtn.textContent = 'Play Again';
    restartBtn.classList.add('restart');
    resultParas.appendChild(restartBtn);

    restartBtn.addEventListener('click', function () {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        guesses = [];
        remainingGuesses = 10;

        guessSlot.textContent = '';
        remaining.textContent = remainingGuesses;
        lowOrHi.textContent = '';
        lowOrHi.style.color = '#333';

        input.disabled = false;
        submit.disabled = false;
        input.value = '';
        input.focus();

        restartBtn.remove();
    });
}
