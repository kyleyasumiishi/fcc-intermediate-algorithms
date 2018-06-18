/*
 * Searches a sentence (str) and replaces one word (before) with another (after), preserving the case of the first character of the original word.
 * @param {String} str - A sentence.
 * @param {String} before - A word in the original sentence to be replaced.
 * @param {String} after - The replacement word.
 */
function myReplace(str, before, after) {
    const wordArray = str.split(" ");
    const newArray = [];
    const upper = /[A-Z]/;
    for (let i = 0; i < wordArray.length; i++) {
        let word = wordArray[i];
        if (word === before) {
            if (upper.test(word)) {
                newArray.push(capitalize(after));
            } else {
                newArray.push(after);
            }
        } else {
            newArray.push(word);
        }
    }
    return newArray.join(" ");
}

/*
 * Helper function that capitalizes the first letter of a string.
 */
function capitalize(str) {
    let firstLetterCapitalized = str.split("")[0].toUpperCase();
    return firstLetterCapitalized + str.slice(1,);
}
