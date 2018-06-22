/*
 * Returns sum of two arguments. If only one argument is provided, returns a function that expects one argument and returns the sum. Returns undefined if any argument isn't a valid number.
 */
function addTogether() {
    const args = Object.values(arguments);
    if (args.length < 1 || !args.every(x => typeof x === 'number')) {
        return undefined;
    } else if (args.length > 1) {
        return args.reduce((a, b) => a + b);
    } else {
        return (num) => addTogether(num, args[0]);
    }
}
