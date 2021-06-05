function isSumEqual(firstWord: string, secondWord: string, targetWord: string): boolean {
    const getSum = (word: string): number => +_.map(word, c => c.charCodeAt(0) - 97).join('');
    return getSum(firstWord) + getSum(secondWord) === getSum(targetWord);
};
