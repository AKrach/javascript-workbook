'use strict';

/* return date program */
function returnDate(){
  return new Date();
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
  return num1 + num2;
}
console.log(addingNumbers());


// 2 things are true program
function twoTrue(){
  const chicken = true;
  const celery = true;
  if (chicken && celery === true) {
    console.log('both are true');
  }
}
console.log(twoTrue());


// 1 thing is true program
function oneTrue(){
  const numOne = true;
  const numTwo = false;
  if (numOne || numTwo === true) {
    console.log('something is right');
  }
}
console.log(oneTrue());


// both things are false program
function bothFalse(){
  const bird = 0;
  const dog = 0;
  if (!bird && !dog) {
    console.log('both are false');
  }
}
console.log(bothFalse());
