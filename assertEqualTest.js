
const assertArraysEqual = require('./assertEqual')
// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false

assertArraysEqual([1, 2, 3, 4], [1, 2, 3]) // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3", "4"]) // => false

assertArraysEqual(("1", "2", "3"), ["1", "2", "3"]) // => false