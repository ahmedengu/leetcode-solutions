function countConsistentStrings(allowed: string, words: string[]): number {
    const set = new Set(allowed);
    return words.filter(word => [...new Set(word).values()].every(c => set.has(c))).length;
};
