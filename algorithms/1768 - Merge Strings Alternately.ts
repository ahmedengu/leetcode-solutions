function mergeAlternately(word1: string, word2: string): string {
    const len = Math.max(word1.length, word2.length);
    const ret = [];
    for (let i = 0; i < len; i++)
        ret.push(word1[i], word2[i]);
    return ret.join('');
};
