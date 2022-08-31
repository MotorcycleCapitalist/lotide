// head function implementation
// const head = head.shift();

const assertArraysEqual = require('./assertEqual')


// assertEqual function implementation
// const assertEqual = function(head, expected) {
//   if (head === expected) {
//     console.log(`Assertion Passed: ${head} === ${expected}`)
//   } else {
//     console.log(`Assertion Failed: ${head} !== ${expected}`)
//   }
//   }
// const eqArrays = function (array1, array2) {
//   let state = false; //state set to false because we will assume the arrays are not equal

//  // if (!Array.isArray(array1) || !Array.isArray(array2)) return state
//  // used if we need to confirm both are arrays

//   //if (array1.length != array2.length) return state;
//   // usedto check if the arrays are the same length, if not same the obviously 'false' 

//   for (let i = 0; i < array1.length; i++) { //i is counter for the loop, if less then the length of the array it will con't looping
//       if (array1[i] === array2[i]) { //to check individual index elements of array
//           state = true; //if each element is same condition is true.
//           //not returning yet because want to cont thru complete array
//       } else {
//           return false //if anything not same loop brokern and false returned
//       }
//   }
//   return state;
// }

// const assertEqual = function (array1, array2) {
//   const state = eqArrays(array1, array2);
//   console.log(state)
// }

// TEST CODE
// console.log(([1, 2, 3], [1, 2, 3]) )// => true
// assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false

// assertArraysEqual([1, 2, 3, 4], [1, 2, 3]) // => false
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3", "4"]) // => false

// assertArraysEqual(("1", "2", "3"), ["1", "2", "3"]) // => false

assertArraysEqual([5,6,7], 5);
assertArraysEqual(['Hola', 'Lighthouse', 'Chips'], 'Hola');