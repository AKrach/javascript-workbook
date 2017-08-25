'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let board = [];
  let solution = '';
  let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  generateSolution();
  document.getElementById("submit").addEventListener("click", () =>{
    const guessing = document.getElementById("theGuess")
    const myGuess = guessing.value;

    mastermind(myGuess);
  });
  function generateSolution() {
    // console.log('solution');
    for (let i = 0; i < 4; i++) {
      const randomIndex = getRandomInt(0, letters.length);
      solution += letters[randomIndex];
    }
  }
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function generateHint(myGuess) {

    let exactMatch = 0;
    let correctLetter = 0;
    let matchIndex = -1;
    // creating arrays out of the strings.
    let solutionArr = solution.split('');
    let myGuessArr = myGuess.split('');

    // This piece of code tests for exact match
    myGuessArr.forEach((letter, index) => {
      if (letter === solutionArr[index]) {
        exactMatch++;
        // clear out value.  This sets us up to look for correct letter test later.  These won't be considered.
        solutionArr[index] = '';
        myGuessArr[index] = '';
      }
    });
    myGuessArr.forEach((letter) => {
      if (letter) {  // letter could be null from previous forEach statement.
        matchIndex = solutionArr.indexOf(letter);  // Let's find a matching letter in the solution!
        if (matchIndex !== -1) {  // We found a letter match in the string.
          correctLetter++
          solutionArr[matchIndex] = '';  // clear out value so value won't be considered with next letter tests.
        }
      }  // closing brace for if (letter)
    });

    alert(`exactMatch ${exactMatch}- correctLetter ${correctLetter}`);
  }

  function mastermind(guess) {
    // console.log('mast');
    // if (validEntry(guess)) {  // Testing to make sure
    board[board.length] = `${guess}  :  ${generateHint(guess)}`;
    if (guess === solution) {
      alert('You win');
    }
    return false;
  }
});
