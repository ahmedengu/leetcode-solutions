/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    let ret = 0;

    for (let i = 0; i < words.length; i++) {
        const set = new Set([...words[i]]);
        for (let j = i + 1; j < words.length; j++) {
            if (checkInteresction(words[j], set)) ret = Math.max(ret, words[i].length * words[j].length);
        }
    }

    return ret;
};

const checkInteresction = (word, set) => {
    for (let i = 0; i < word.length; i++) {
        if (set.has(word[i])) return false;
    }
    return true;
}
