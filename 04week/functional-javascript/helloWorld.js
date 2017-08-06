// function upperCaser(input) {
//   return input.toUpperCase();
// }
//
// module.exports = upperCaser

// function repeat(operation, num) {
//   for (var i = 0; i < num; i++) {
//     operation();
//   }
// }
//
// // Do not remove the line below
// module.exports = repeat

function doubleAll(numbers) {
      // SOLUTION GOES HERE
  const double = numbers.map((numbers) => {
    return numbers * 2;
  });
}
module.exports = doubleAll
