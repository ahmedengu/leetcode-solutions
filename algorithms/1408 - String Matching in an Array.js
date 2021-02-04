/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    return words.filter((word, i) => words.find((ww, j) => i !== j && ww.includes(word)));
};
