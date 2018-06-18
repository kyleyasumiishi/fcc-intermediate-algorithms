/*
 * Sums all the prime numbers up to an including the provided number.
 * @param {Number} num
 */
function sumPrimes(num) {
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

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
