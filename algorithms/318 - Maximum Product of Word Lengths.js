/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    let ret = 0;

    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (checkInteresction(words[i], words[j])) ret = Math.max(ret, words[i].length * words[j].length);
        }
    }

    return ret;
};

const checkInteresction = (word1, word2) => {
    for (let i = 0; i < word1.length; i++) {
        if (word2.includes(word1[i])) return false;
    }

    return true;
}
