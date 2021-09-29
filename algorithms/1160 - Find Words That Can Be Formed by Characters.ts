function countCharacters(words: string[], chars: string): number {
    const map = _.countBy(chars);
    return words.reduce((acc, word) => acc += _.every(_.countBy(word), (v, k) => map[k] >= v) ? word.length : 0, 0);
};
