/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);
    let abs, min = Infinity, ret = [];

    for (let i = 1; i < arr.length; i++) {
        abs = Math.abs(arr[i - 1] - arr[i]);
        if (abs < min) {
            min = abs;
            ret = [[arr[i - 1], arr[i]]];
        } else if (abs === min) {
            ret.push([arr[i - 1], arr[i]]);
        }
    }

    return ret;
};
