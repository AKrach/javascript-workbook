'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  // Your code here
  if (board[0][0] && board[0][1] && board[0][2] === playerTurn ||
  board[1][0] && board[1][1] && board[1][2] === playerTurn ||
  board[2][0] && board[2][1] && board[2][2] === playerTurn) {
    return true;
  }

}

function verticalWin() {
  // Your code here
  if (board[0][0] && board[1][0] && board[2][0] === playerTurn ||
  board[0][1] && board[1][1] && board[2][1] === playerTurn ||
  board[0][2] && board[1][2] && board[2][2] === playerTurn) {
    return true;
  }
}

function diagonalWin() {
  // Your code here
  if (board[0][0] && board[1][1] && board[2][2] === playerTurn ||
  board[0][2] && board[1][1] && board[2][0] === playerTurn) {
    return true;
  }
}

function checkForWin() {
  // Your code here
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    return true;
  }
}

function ticTacToe(row, column) {
  if(!board[row][column].trim()){
      const updatedBoard = [...board, 5];
      // can't w/o an immutable lib
      // slice the row, store to const, (not splice bc that doesn't return the row)
      const updatedRow = updatedBoard.slice(row, row+1)[0];
      // console.log(updatedRow, 'ROW');
      // at the col index of that row splice the marker
      updatedRow.splice(column, 1, playerTurn);
      // console.log(updatedRow, 'ROW');
      // splice new row to copy of board
      // set old borad to new board
      updatedBoard.splice(row, 1, updatedRow);

      // console.log(board, 'board');
    /*Check for the wins*/
    if(checkForWin()){
        board = [[' ', ' ', ' '],[' ', ' ', ' '],[' ', ' ', ' ']];
        console.log(`Player ${playerTurn} wins`);
    }else{
        playerTurn = playerTurn === 'X' ? 'O' : 'X';
        return board;
    }
    /*If any wins come back return the player winner, clear the board*/
    /*If no wins, switch the player, display the updated board*/
  }else{
    console.log('Space taken, try again');
  }
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
