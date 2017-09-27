'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
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
    return`${exactMatch}-${correctLetter}`;
}
function mastermind(guess) {
  board[board.length] = `${guess} : ${generateHint(guess)}`;
  if (guess === solution) {
    return`Winner`;
    

  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess)
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
