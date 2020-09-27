/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    const ret = [], iLen = A.length, jLen = A[0].length-1;

    for (let i = 0; i < iLen; i++) {
        ret.push([]);
        for (let j = jLen; j >= 0; j--) {
            ret[i].push(A[i][j] ? 0 : 1);
        }
    }

    return ret;
};
