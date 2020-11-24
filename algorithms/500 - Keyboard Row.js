/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const row1 = /[qwertyuiop]/gi;
    const row2 = /[asdfghjkl]/gi;
    const row3 = /[zxcvbnm]/gi;
    return words.filter(word => !word.replace(row1, '') || !word.replace(row2, '') || !word.replace(row3, ''))
};
