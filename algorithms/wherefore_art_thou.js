/*
 * Looks through an array of objects (first argument) and returns an array of all objects that have matching name/value pairs (second argument).
 * @param {Array} collection - Array of objects.
 * @param {Object} source - Object containing name/value pairs.
 * @return {Array} arr - Array of objects from collection that contains each name/value pair from source.
 */
function whatIsInAName(collection, source) {
    var arr = [];
    for (let i = 0; i < collection.length; i++) {
        let object = collection[i];
        let isMatch = true;
        Object.entries(source).forEach(function([key, value]) {
            if (!(object.hasOwnProperty(key) && object[key] === value)) {
                isMatch = false;
            }
        });
        if (isMatch) {
            arr.push(object);
        }
    }
    return arr;
}
