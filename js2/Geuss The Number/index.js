let randomNumber = parseInt(Math.random() * 100 + 1)
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const low0rHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess)
        validatesGuess(guess)
    })
}
function validatesGuess(guess) {
    if (isNaN(guess)) {
        alert(" please enter a valid number ")
    }
    else if (guess < 1) {
        alert(" please enter a  number more than 1 ")
    }
    else if (guess > 100) {
        alert(" please enter a  number less than 100 ")
    }
    else {
        prevGuess.push(guess);
    }
    if (numGuess === 11) {
        displaysGuess(guess)
        displayMessage(`Game Over.Randome number was ${randomNumber}`)
        endGame()
    }
    else {
        displaysGuess(guess)
        checkGuess(guess)
    }
}
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage("You guessed it right")
        endGame()
    }
    else if (guess < randomNumber) {
        displayMessage("you number is too low")
    }
    else {
        displayMessage("you number is too high")
    }
}
function displaysGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += ` ${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message) {
    low0rHi.innerHTML = `<h2>${message}</h2>`
}
function endGame(guess) {
    userInput.value = ''
    userInput.setAttribute("disabled", '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    newGame()
}
function newGame(guess) {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })

}
