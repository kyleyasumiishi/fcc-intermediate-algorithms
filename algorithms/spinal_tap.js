/*
 * Converts a string to spinal case (all-lowercase-words-joined-by-dashes).
 * @param {String} str
 */
function spinalCase(str) {
    const words = str.replace(/([A-Z]+)/g, ' $1').trim().toLowerCase().split(/\s|\W|_|-/);
    return words.filter(word => word !== "").join("-");
}
