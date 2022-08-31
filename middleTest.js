
const middle = require('./middle')
const assertArraysEqual = require('./assertEqual')

middle([1]) // => []
middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

const food = ["eba", "amala", "ewedu", "ogbono"];
const selected = middle(food); // => ["amala", "ewedu"];
assertArraysEqual(food, ["eba", "amala", "ewedu", "ogbono"]) // => true
assertArraysEqual(food, selected) // => false