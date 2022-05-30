'use strict';
/*
console.log(document.querySelector('.message').textContent)

document.querySelector('.message').textContent = '😄 Correct Number'

document.querySelector('h1').textContent = 'I Won 🤣'

document.querySelector('.between').textContent = 'Between 100 to 200'

console.log(document.querySelector('.guess').value);

document.querySelector('.guess').value = 100

console.log(document.querySelector('.guess').value); */

// document.querySelector('.check').addEventListener('click', function () { console.log(document.querySelector('.guess').value) })

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
// let score = Number(document.querySelector('.score').textContent)
// console.log(typeof score);
// console.log(secretNumber);




document.querySelector('.check').addEventListener('click', () => {
    const input = Number(document.querySelector('.guess').value)
    // console.log(input)

    // When there is no input
    if (!input) {
        // alert('Please type a number')
        // document.querySelector('.message').textContent = '❌ No number'
        displayMessage('❌ No number')

        // When player wins
    } else if (input === secretNumber) {
        // document.querySelector('.message').textContent = '🥳 Correct Number!'
        displayMessage('🥳 Correct Number!') // Code DRY(Don't repeat yourself) refactoring

        document.querySelector('.number').textContent = secretNumber
        score++;
        document.querySelector('.score').textContent = score;

        document.querySelector('body').style.backgroundColor = '#60b347'

        document.querySelector('.number').style.width = '30rem'

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore
        }

        // disable the check button
        document.querySelector('.check').disabled = true



    } else if (input !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent =
            //     (input > secretNumber) ? '📈 Too high!' : '📉 Too low!'
            displayMessage((input > secretNumber) ? '📈 Too high!' : '📉 Too low!')

            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '😢 You lost the game!'
            displayMessage('😢 You lost the game!')

            document.querySelector('.score').textContent = 0;
        }
    } // When guess is too high
    // else if (input > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too high!'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '😢 You lost the game!'
    //         document.querySelector('.score').textContent = 0;
    //     }

    //     // When guess is too high
    // } else if (input < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too low!'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '😢 You lost the game!'
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
})



document.querySelector('.again').addEventListener('click', () => {
    // window.location.reload()
    document.querySelector('.check').disabled = false;
    score = 20;
    document.querySelector('.score').textContent = score;

    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Start guessing...'
    displayMessage('Start guessing...')

    document.querySelector('.number').textContent = '?'

    document.querySelector('.guess').textContent = '';

    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '30rem'
})