/*
 * Given a positive integer num, returns the sum of all odd Fibonacci numbers that are less than or equal to num.
 * @param {Number} num - A positive integer.
 */
function sumFibs(num) {
    const fibNums = [];
    let maxNum = 0;
    let prevTwo = 1;
    let prevOne = 1;
    while (maxNum <= num) {
        if (fibNums.length === 0 || fibNums.length === 1) {
            fibNums.push(1);
        } else {
            maxNum = prevTwo + prevOne;
            fibNums.push(maxNum);
            prevTwo = prevOne;
            prevOne = maxNum;
        } 
    }
    return fibNums.filter(element => (element % 2 !== 0) && (element <= num)).reduce((acc, val) => acc + val);
}
