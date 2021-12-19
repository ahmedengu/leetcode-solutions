function numSmallerByFrequency(queries: string[], words: string[]): number[] {
    const wordsCount = words.map(minCount);
    return queries.map(minCount).map(q => wordsCount.filter(w => q < w).length);
};


const minCount = (s: string): number => _.countBy(s)[_.min(s)];
