/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    return every(A) || rev(A);
};

const every = (A) => A.every((v, i) => !i || v >= A[i - 1]);
const rev = (A) => A.every((v, i) => !i || v <= A[i - 1]);
