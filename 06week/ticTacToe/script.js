'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const winState = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    // horizontal wins
    [0,3,6],
    [1,4,7],
    [2,5,8],
    // vertical wins
    [0,4,8],
    [2,4,6]
    // diagonal wins
  ];
  let playerTurn = 'X';


  let boxes = document.querySelectorAll("[data-cell]");


  boxes.forEach(box => {
    box.addEventListener("click", thisBox => {
      if (!thisBox.target.textContent) {
        thisBox.target.textContent = playerTurn;
        if (checkForWin()) {
          document.getElementById('announce-winner').textContent = `${playerTurn} won`;
        } else {
          playerTurn = playerTurn === 'X'? 'O' : 'X';
        }
      }
    });
  });


  document.getElementById('clear').addEventListener("click", (event)=> {
    playerTurn = 'X';
    boxes.forEach(box => {
      box.textContent = null;
    })
    document.getElementById('announce-winner').textContent = null;
  })


  function checkForWin() {
    return winState.some(winning => winning.every(index => boxes[index].textContent === playerTurn));
  }




});
