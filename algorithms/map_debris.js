/*
* Returns a new array that transforms the elements' average altitude into their orbital periods.
* @param {Array} arr - Array of objects.
*/
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    arr.forEach(obj => {
        obj['orbitalPeriod'] = Math.round(kepler(earthRadius + obj['avgAlt'], GM));
        delete obj['avgAlt'];
    });
    return arr;
}

/*
 * Returns the orbital period (in seconds) of two point masses orbiting each other in a circular or elliptic orbit (Kepler's Third Law).
 * @param {Number} axis - Orbit's semi-major axis
 * @param {Number} GM - standard gravitational parameter
 */
function kepler(axis, GM) {
    let t = (2 * Math.PI) * Math.sqrt(axis ** 3 / GM);
    return t;
}
