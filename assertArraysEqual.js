// function implementation
const eqArrays = function (array1, array2) {
    let state = false;

    if (!Array.isArray(array1) || !Array.isArray(array2)) return state

    if (array1.length != array2.length) return state;

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            state = true;
        } else {
            return false
        }
    }
    return state;
}

const assertArraysEqual = function (array1, array2) {
    const state = eqArrays(array1, array2);
    console.log(state)
}

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false

assertArraysEqual([1, 2, 3, 4], [1, 2, 3]) // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3", "4"]) // => false

assertArraysEqual(("1", "2", "3"), ["1", "2", "3"]) // => false