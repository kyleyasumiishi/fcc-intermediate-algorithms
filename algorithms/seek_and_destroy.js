/*
 * Removes all elements from the initial array (first argument) that are of the same value as the following arguments.
 * @param {Array} arr - An initial array followed by one or more arguments
 * @return {Array} The initial array in arr with elements removed 
 */
function destroyer(arr) {
    let initialArrayCopy = arguments[0].slice();
    let argArrayCopy = Object.values(arguments);
    argArrayCopy.shift();
    let newArr = [];

    for (let i = 0; i < initialArrayCopy.length; i++) {
        if (argArrayCopy.indexOf(initialArrayCopy[i]) === -1) {
            newArr.push(initialArrayCopy[i]);
        }
    }

    arguments[0] = newArr;

    return arguments[0];
}