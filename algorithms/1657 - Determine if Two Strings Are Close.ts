function closeStrings(word1: string, word2: string): boolean {
    if (word1.length !== word2.length || !isSameFreq(word1, word2)) return false;
    return getFreq(word1) === getFreq(word2);
};

const isSameFreq = (word1, word2) => {
    const s1 = new Set(word1);
    const s2 = new Set(word2);
    return [...s1].every(c => s2.has(c));
};
const getFreq = word => Object.values(_.countBy(word)).sort().join();
