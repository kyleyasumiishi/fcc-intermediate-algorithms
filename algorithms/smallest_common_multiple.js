/*
 * Returns the smallest common multiple of the provided paramaters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
 * @param {Array} arr - Array of two numbers (not necessarily in order)
 */
function smallestCommons(arr) {
    const revRange = [];
    for (let i = Math.max(...arr); i >= Math.min(...arr); i--) {
        revRange.push(i);
    }
    let scm = revRange[0];
    revRange.slice().forEach(num => {
        if (scm % num !== 0) {
            let mult = 2;
            while ((num * mult) % scm !== 0) {
                mult++;
            }
            scm = (num * mult);
        }
    });
    return scm;
}
