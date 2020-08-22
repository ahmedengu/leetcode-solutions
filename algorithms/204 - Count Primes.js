/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n <= 2) return 0;
    let count = 0;
    const sieve = Array(n);
    for (let i = 2; i < n; i++) {
        if (sieve[i] !== 0) {
            count++;
            sieve[i] = 1;
            for (let j = i + i; j < n; j += i) {
                sieve[j] = 0;
            }
        }
    }

    return count;
};
