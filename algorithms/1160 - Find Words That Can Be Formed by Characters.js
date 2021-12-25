/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const map = _.countBy(chars);

    return words.reduce((acc, word) => acc += _.every(_.countBy(word), (v, k) => map[k] >= v) ? word.length : 0, 0);
};
