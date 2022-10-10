/**
 * The program plays a guessing game
 *
 *
 * By:      Sydney Kuhn
 * Version: 1.0
 * Since:   2022-10-5
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()
const min = 1
const max = 6
const randomInt = Math.floor(Math.random() * max) + min
let guesses = 1

while (true) {
  try {
    const guessString = prompt('Guess a number between 1-6: ')
    const guess = parseInt(guessString)

    if (isNaN(guess)) {
      throw new Error('Invalid Input Entered.')
    }
    if (guess < 1 || guess > 6) {
      console.log('Not an integer between 1-6.')
    } else if (guess === randomInt) {
      console.log('\nYou guessed the number!')
      console.log(`It took you ${guesses} tries to guess correctly.`)
      break
    } else if (guess > randomInt) {
      console.log('That number is too high, guess lower.')
    } else {
      console.log('That number is too low, guess higher.')
    }
  } catch (e) {
    console.log('Invalid Input Entered.')
  }
  guesses = guesses + 1
}
console.log('\nDone.')
