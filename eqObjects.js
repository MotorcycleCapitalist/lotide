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
    return state
}

const assertEqual = function (item1, item2) {
    const state = item1 === item2;
    return state
}

const eqObjects = function (object1, object2) {
    let state = false;

    if (typeof object1 !== 'object' || typeof object2 !== 'object') { return state; }

    object1_keys = Object.keys(object1);
    object2_keys = Object.keys(object2);

    if (object1_keys.length !== object2_keys.length) { return state; }

    for (key of object1_keys) {
        if (!object2[key]) { return state; }

        if (Array.isArray(object1[key]) && assertArraysEqual(object1[key], object2[key]) == false) {
            return state;
        } else if (!Array.isArray(object1[key]) && object1[key] !== object2[key]) {
            return state;
        }
    }

    state = true;
    return state;
};

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };


console.log(eqObjects(ab, ba)); // => true
console.log(eqObjects(ab, abc)); // => false
console.log(eqObjects(cd, dc)); // => true
console.log(eqObjects(cd, cd2)); // => false
console.log("...................assert equal ..............")
console.log(assertEqual(eqObjects(ab, ba), false)); // => false
console.log(assertEqual(eqObjects(ab, abc), true)); // => false
console.log(assertEqual(eqObjects(cd, dc), false)); // => false
console.log(assertEqual(eqObjects(cd, cd2), true)); // => false
