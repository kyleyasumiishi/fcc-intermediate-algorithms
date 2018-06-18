/*
 * Takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
 * @param {...Array} arr - Two or more arrays of numerical values.
 */
function uniteUnique(arr) {
    const concatUniqueVals = [];
    for (let i = 0; i < arguments.length; i++) {
        const subArray = arguments[i];
        console.log(subArray);
        for (let j = 0; j < subArray.length; j++) {
            const val = subArray[j];
            if (!concatUniqueVals.includes(val)) {
                concatUniqueVals.push(val);
            }
        }
    }
    return concatUniqueVals;
}
