function countWords(words1: string[], words2: string[]): number {
    const count1 = _.countBy(words1);
    const count2 = _.countBy(words2);
    return Object.keys(count1).filter(w => count1[w] === 1 && count2[w] === 1).length;
};
