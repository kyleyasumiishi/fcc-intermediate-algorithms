/*
 * Returns the sum of the two numbers in the given array, plus the sum of all the numbers between them.
 * @param {Array} arr - Array of two numbers
 */
function sumAll(arr) {
    const min = arr[0] > arr[1] ? arr[1] : arr[0];
    const max = arr[0] > arr[1] ? arr[0] : arr[1];
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}
