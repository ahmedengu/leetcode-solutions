/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N, map = {}) {
    if (N === 0 || N === 1) return N;
    if (!map[N]) map[N] = fib(N - 1, map) + fib(N - 2, map);
    return map[N];
};
