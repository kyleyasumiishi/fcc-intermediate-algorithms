/*
 * Given the array arr, iterates through and removes each element starting from the first element until the function func returns true when the iterated element is passed through it. Then returns the rest of the array once the condition is satisfied; otherwise, returns an empty array.
 * @param {Array} arr  
 * @param {Function} func - returns true or false
 */
function dropElements(arr, func) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            break;
        } 
        counter++;
    }
    return arr.slice(counter,);
}
