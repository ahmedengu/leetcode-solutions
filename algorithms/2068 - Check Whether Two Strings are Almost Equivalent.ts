function checkAlmostEquivalent(word1: string, word2: string): boolean {
    const count1 = _.countBy(word1);
    const count2 = _.countBy(word2);
    let max = 0;
    for (let i = 0; i < 26; i++) {
        const char = String.fromCharCode(97 + i);
        max = Math.max(max, Math.abs((count1[char] || 0) - (count2[char] || 0)));
    }
    return max <= 3;
};
