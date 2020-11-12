/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const t = [];
    const set = new Set(wordDict);

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j <= i; j++) {
            const word = s.slice(j, i + 1);
            if (set.has(word) && (j === 0 || t[j - 1] === true)) {
                t[i] = true;
            }
        }
    }

    return t[s.length - 1] || false;
};
