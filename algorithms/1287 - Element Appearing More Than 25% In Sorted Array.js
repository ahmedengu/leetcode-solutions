/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    const len = arr.length;
    for (let i = 0, count; i < len; i++) {
        count = (arr[i] === arr[i - 1] && count) + 1;
        if (count * 4 > len) return arr[i];
    }
};
