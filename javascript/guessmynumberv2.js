/* Here I am using the Math library and the random function. 
I add one (1) to the output to account for the computer arithmetic of starting count from 0
*/
let num = Math.floor(Math.random() * 100) + 1

const guesses = document.querySelector(".guesses")
const lastResult = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")

const guessSubmit = document.querySelector(".guessSubmit")
const guessField = document.querySelector(".guessField")

let guessCount = 1
let resetButton
guessField.focus()

function checkGuess() {
    let userGuess = Number(guessField.value)
    if (guessCount === 1) {
        guesses.textContent = "Previous guesses: "
    }
    guesses.textContent += userGuess + " "

    if (userGuess === num) {
        lastResult.textContent = "Congratulations, You got it right!"
        lastResult.style.backgroundColor = "green"
        lowOrHi.textContent = ""
        setGameOver()
    } else if (guessCount === 10) {
        lastResult.textContent = "!!!GAME OVER!!!"
        setGameOver()
    } else {
        lastResult.textContent = "Wrong!"
        lastResult.style.backgroundColor = "red"
        if (userGuess < num) {
            lowOrHi.textContent = "Your guess is too low. Increase the guess..."
        } else if (userGuess > num) {
            lowOrHi.textContent = "Your guess is too high. Lower the guess..."
        }
    }
    guessCount++
    guessField.value = ""
    guessField.focus()
}

guessSubmit.addEventListener("click", checkGuess)

function setGameOver() {
    guessField.disabled = true
    guessSubmit.disabled = true
    resetButton = document.createElement("button")
    resetButton.textContent = "Start new game"
    document.body.append(resetButton)
    resetButton.addEventListener("click", resetGame)
}

function resetGame() {
    guessCount = 1

    const resetParas = document.querySelectorAll(".resetParas p")
    for (let i = 0; i < resetParas.length; i++) {
        resetParas(i).textContent = ""
    }

    const clearGuesses = document.querySelector(".guesses")
    clearGuesses.textContent = ""

    resetButton.parentNode.removeChild(resetButton)

    guessField.disabled = false
    guessSubmit.disabled = false
    guessField.value = ""
    guessField.focus()

    lastResult.style.backgroundColor = "white"

    num = Math.floor(Math.random() * 100) + 1
}
// adding something to make a change... {addjkahf
}