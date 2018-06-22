/*
 * Returns an English translated sentence of the passed binary string.
 * @param {String} str - A space separated binary string.
 */
function binaryAgent(str) {
    let translated = "";
    const binaryCharacters = str.split(" ");
    binaryCharacters.forEach(char => {
        translated += String.fromCharCode(parseInt(char, 2));
    });
    return translated;
}
