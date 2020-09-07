/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const dp = _.times(t.length + 1, () => _.times(s.length + 1, () => 0)); // init dp grid

    for (let i = 1; i <= t.length; i++) {
        for (let j = 1; j <= s.length; j++) {
            dp[i][j] = t[i - 1] === s[j - 1] ? dp[i - 1][j - 1] + 1 : dp[i - 1][j]; // if equal get diagonal + 1 else get last row same column value
        }
    }

    return dp[t.length][s.length] === s.length;
};
