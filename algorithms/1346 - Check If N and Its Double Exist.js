/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    const map = {};

    for (const n of arr) {
        if (map[n * 2] || map[n / 2]) return true;
        map[n] = true;
    }

    return false;
};
