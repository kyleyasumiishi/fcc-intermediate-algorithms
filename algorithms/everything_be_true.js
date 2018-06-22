/*
 * Checks if the predicate (second argument) is truthy on all elements of a collection (first argument).
 * @param {Array} collection - Array of objects.
 * @param {String} pre - Object property.
 */
function truthCheck(collection, pre) {
    for (let i = 0; i < collection.length; i++) {
        if (!collection[i][pre]) return false;
    }
    return true;
}
