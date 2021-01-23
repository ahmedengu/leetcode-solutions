/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const count = [];

    for (const num of arr) {
        count[num] = (count[num] || 0) + 1;
    }

    for (let i = count.length - 1; i >= 0; i--) {
        if (count[i] === i) return i;
    }

    return -1;
};
