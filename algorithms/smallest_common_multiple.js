/*
 * Returns true if the provided number is a prime number, and false otherwise.
 * @param {Number} num
 */
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const primeFrequency = {};


function smallestCommons(arr) {
    const min = arr[0] > arr[1] ? arr[1] : arr[0];
    const max = arr[0] > arr[1] ? arr[0] : arr[1];
    let upperMultiple = min * max;
    // for (let i = max - 1; i > min; i--) {
    //     if (upperMultiple % i !== 0) {
    //         upperMultiple *= i;
    //     }
    // }



    for (let i = min + 1; i < max; i++) {
        if (upperMultiple % i !== 0) {
            upperMultiple *= i;
        }
    }
    return upperMultiple;
}

console.log(smallestCommons([2, 10]));

/*
Input: Array with two numbers
Output: Product - smallest common multiple

brute force method would be to find greatest common multiple and then take out one divisor and see if all the other integers divide into it without a remainder.

ans 
multiple both elements of array together
iterate through each element between. for each
    is evenly divisble
        yes - pass
        no - multiply ans


for every number in range min - max
    find all prime number multiples - how?
        for each prime number
            is number of times multiplied greater than max for that prime number
                yes - update


for every number up to largest multiple check if prime.
    if yes add to object as key with value of 0


*/
