'use strict';

/* return date program */
function returnDate(){
  const date = new Date();
  return date;
}
console.log(returnDate());


// number to string program
function numberToString(){
  const number = 5;
  return number.toString();
}
console.log(numberToString());


// string to number program
function stringToNumber(){
  return parseInt('015', 10);
}
console.log(stringToNumber());


// datatypes program
function returnType(type){
  return typeof type;
}
console.log(returnType(15));

// additon program
function addingNumbers(){
  const num1 = 5;
  const num2 = 3;
  const num3 = num1 + num2;
  return num3;
}
console.log(addingNumbers());


// 2 things are true program
function twoTrue(){
  const chicken = true;
  const celery = true;
  if (chicken === true && celery === true) {
    console.log('both are true');
  }
}
console.log(twoTrue());


// 1 thing is true program
function oneTrue(){
  const numOne = 2;
  const numTwo = 4;
  if (numOne < numTwo) {
    console.log('the first is smaller');
  }
}
console.log(oneTrue());


// both things are false program
function bothFalse(){
  const bird = true;
  const dog = true;
  if (bird === false && dog === false) {
    console.log('both are true');
  }else {
    console.log('both are false');
  }
}
console.log(bothFalse());
