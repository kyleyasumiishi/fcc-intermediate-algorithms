/*
 * Returns the missing letter (if any) in the passed letter range. If no letters are missing, returns undefined.
 * @param {String} str - String of letters.
 */ 
function fearNotLetter(str) {
    const letterArray = str.split("");
    for (let i = 1; i < letterArray.length; i++) {
        const letterCode = letterArray[i].toLowerCase().charCodeAt(0);
        const previousLetterCode = letterArray[i - 1].toLowerCase().charCodeAt(0);
        if (letterCode - previousLetterCode !== 1) {
            return String.fromCharCode(letterCode - 1);
        }
    }
    return undefined;
}
