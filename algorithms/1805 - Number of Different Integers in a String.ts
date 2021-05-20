function numDifferentIntegers(word: string): number {
    return _
        .chain(word)
        .split(/\D/)
        .filter()
        .map(BigInt)
        .uniq()
        .value()
        .length;
};
