// function implementation
const assertEqual = function (item1, item2) {
    const state = item1 === item2;
    console.log(state)
    return state
}

const countOnly = function (allItems, itemsToCount) {
    const results = {};

    if (!Array.isArray(allItems) || allItems.length <= 0 || typeof itemsToCount !== 'object') return results

    const item_keys = Object.keys(itemsToCount);

    for (const item of allItems) {
        console.log(item)
        const results_keys = Object.keys(results)
        if (item_keys.includes(item) && itemsToCount[item]) {
            if (results_keys.includes(item)) {
                results[item] = parseInt(results[item]) + 1;
            } else {
                results[item] = 1;
            }
        }
    }

    console.log(results)
    return results;
}


// TEST CODE
const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log("(...assertion output follows ...)")

assertEqual(result1["Jason"], 1); //true
assertEqual(result1["Karima"], undefined); //true
assertEqual(result1["Fang"], 2); //true
assertEqual(result1["Agouhanna"], undefined); //true