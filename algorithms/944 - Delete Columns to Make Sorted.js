/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    const set = new Set();

    for (let i = 1; i < A.length; i++) {
        for (let j = 0; j < A[i].length; j++) {
            if (A[i][j] < A[i - 1][j]) {
                set.add(j);
            }
        }
    }

    return set.size;
};
