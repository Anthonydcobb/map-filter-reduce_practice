// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.
// const addOne = numbers.map(function (x) {
//   return x + 1;
// });

// console.log(addOne);

// //Filter - Create a new array by keeping the items that return true.
// const greaterThan10 = numbers.filter(function (x) {
//   return x > 10;
// });

// console.log(greaterThan10);

// //Reduce - Accumulate a value by doing something to each item in an array.

// const foo = numbers.reduce(function (acc, curr) {
//   console.log(`accumulator: ${acc}`);
//   console.log(`current number: ${curr}`);
//   return acc + curr;
// });

// console.log(foo);

// //Find - find the first item that matches from an array.
// const find = numbers.find(function (num) {
//   return num > 10;
// });

// console.log(find);

// //FindIndex - find the index of the first item that matches.
// const findIndex = numbers.findIndex(function (num) {
//   return num > 10;
// });

// console.log(findIndex);

import emojipedia from "./emojipedia";

//create an array that has the meanings from emojipedia, and they are truncated to 100 characters

const meanings = emojipedia.map(function (element) {
  return element.meaning.substring(0, 100);
});

console.log(meanings);
