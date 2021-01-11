/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    return arr.sort((a, b) => {
        if (!(a in map)) map[a] = a.toString(2).replace(/0/g, '').length;
        if (!(b in map)) map[b] = b.toString(2).replace(/0/g, '').length;

        return (map[a] - map[b]) || (a - b);
    });
};

const map = {};
