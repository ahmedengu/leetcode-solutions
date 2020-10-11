/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    const map = {},
        len = A.length;
    let i = 0;

    for (; i < len; i++) {
        if (map[A[i]]) {
            return A[i];
        } else {
            map[A[i]] = 1;
        }
    }
};
