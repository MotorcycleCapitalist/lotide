// function implementation
const assertEqual = function (item1, item2) {
    const state = item1 === item2;
    return state
}

const findKeyByValue = function (object, value) {
    let results;

    if (typeof object !== 'object') return results

    const object_keys = Object.keys(object);

    for (const key of object_keys) {

        if (object[key] == value) {
            return key
        }
    }

    return results;
}

// TEST CODE
const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")); //TRUE
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));  //TRUE