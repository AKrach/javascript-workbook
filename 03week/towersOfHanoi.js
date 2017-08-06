'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  // Your code here
  // take disc off starting peg
  // put disc on end peg
  const poppedDisc = stacks[startStack].pop();
  stacks[endStack].push(poppedDisc);
}

function isLegal(startStack, endStack) {
  // Your code here
  // check if disc value is greater than disc on end peg
  if (endStack.length === 0) {
    return true;
  } else if (stacks[startStack][stacks[startStack].length - 1] > stacks[endStack][stacks[endStack].length - 1]) {
    console.log('Cannot do that');
    return false;
  }
}

function checkForWin(endStack) {
  // Your code here
  // check if all discs are on last peg
  if (stacks['c'].length === 4) {
    console.log('Winner');
  }
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  // runs all other functions
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    checkForWin(endStack);
  }
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {

  getPrompt();

}
