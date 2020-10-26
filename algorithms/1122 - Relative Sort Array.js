/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const ret = [];

    for (const n of arr2) {
        let tmp = arr1.filter(x => x === n);
        if (tmp.length) {
            arr1 = arr1.filter(x => x !== n);
            ret.push(...tmp);
        }
    }

    arr1.sort((a, b) => a - b);

    return ret.concat(arr1);
};
