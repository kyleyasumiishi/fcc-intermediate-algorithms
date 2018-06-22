/*
 * Flattens a nested array.
 */
function steamrollArray(arr) {
    let elements = [];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (!Array.isArray(element)) {
            elements.push(element);
        } else {
            elements = elements.concat(steamrollArray(element));
        }
    }
    return elements;
}
