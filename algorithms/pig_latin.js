/*
 * Translates the provided string to pig latin.
 * @param {String} str - English word in all lowercase.
 */
function translatePigLatin(str) {
    const letterArray = str.split("");
    let vowels = /[AEIOU]/i;
    let firstConsonants = "";
    for (let i = 0; i < letterArray.length; i++) {
        let letter = letterArray[i];
        if (!vowels.test(letter)) {
            firstConsonants += letter;
        } else {
            if (firstConsonants.length) {
                return str.slice(i,) + firstConsonants + "ay";
            } else {
                return str + "way";
            }
        }
    }
    return str + "ay";
}
