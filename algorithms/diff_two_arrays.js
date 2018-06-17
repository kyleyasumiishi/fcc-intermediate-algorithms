/*
 * Compares two arrays and returns the symmetric difference as a new array.
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array} newArr - Symmetric difference of arr1 and arr2
 */
function diffArray(arr1, arr2) {
    var newArr = [];
    arr1.forEach(element => {
        if (arr2.indexOf(element) === -1) {
            newArr.push(element);
        }
    });
    arr2.forEach(element => {
        if (arr1.indexOf(element) === -1) {
            newArr.push(element);
        };
    });
    return newArr;
}
