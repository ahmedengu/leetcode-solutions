/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    const len = arr.length - 1;
    let i = 0, max = arr[len];

    for (i = len; i > 0; i -= 1) {
        max = Math.max(max, arr[i]);
        arr[i] = max;
    }


    arr.shift();
    arr.push(-1);

    return arr;
};
