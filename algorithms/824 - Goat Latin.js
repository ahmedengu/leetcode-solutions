/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    return S
        .split(' ')
        .map((word, i) => /[aeiou]/i.test(word[0]) ? word : word.slice(1) + word[0])
        .map((word, i) => `${word}ma${'a'.repeat(i + 1)}`)
        .join(' ');
};
