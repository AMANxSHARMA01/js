let RandomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrhigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function(e){
       e.preventDefault()                                         // * form mai value ko roko
       const guess = parseInt(userInput.value)
       validateGuess(guess);
    })
}

function validateGuess(guess){
    if (isNaN(guess) || guess > 100 || guess < 0 ) {
        alert("Please Enter a Valid number")
        userInput.value = ''
    } else {
        prevGuess.push(guess)
        if (numGuess == 11) {
            cleanUpGuess(guess)
            displayMessage(`Game Over. Random Number was ${RandomNumber}`)
            endGame()
        } else {
            cleanUpGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if (guess == RandomNumber) {
        displayMessage(`You guessed is right !`)
        endGame()
    } else if (guess < RandomNumber){
        displayMessage (`No. is too low`)
    }else if (guess > RandomNumber){
        displayMessage (`No. is too high`)
    }
}

function cleanUpGuess(guess){
    userInput.value = ''                                     // ! clean up method
    guessSlot.innerHTML += ` ${guess}`
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
                                       
}

function displayMessage(message){
    lowOrhigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id ="newGame">NEW GAME</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const NewGameButton = document.querySelector('#newGame') 
    NewGameButton.addEventListener('click', function(e){
        RandomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled', '')
        startOver.removeChild(p);

        playGame = true
    })
}
