/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    return A[0].map((v, i) => A.map(x => x[i]));
};
