/*
 * Each DNA nucelotide base in the given string is paired with its complement in an array, and all the arrays are grouped into one encapsulating array.
 * @param {String} str - Sequence of DNA nucelotide bases (i.e., "A", "T", "G", "C").
 * @return {Array} 2d array of base pairs.
 */
function pairElement(str) {
    const BASE_PAIRS = {"A": "T", "T": "A", "C": "G", "G": "C"};
    const basesArray = str.split("");
    const pairsArray = [];
    for (let i = 0; i < basesArray.length; i++) {
        const base = basesArray[i];
        const complement = BASE_PAIRS[base];
        const pair = [base, complement];
        pairsArray.push(pair);
    }
    return pairsArray;
}
