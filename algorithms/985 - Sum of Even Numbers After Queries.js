/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
    let sum = _.sumBy(A, n => (n & 1) === 0 ? n : 0)
    return queries.map(([val, idx]) => {
        if (!(A[idx] & 1)) sum -= A[idx];
        A[idx] += val;
        if (!(A[idx] & 1)) sum += A[idx];
        return sum;
    })
};
