function checkIfPangram(sentence: string): boolean {
    return _.reduce(sentence, (acc, c) => acc |= 1 << (c.charCodeAt(0) - 97), 0) === 67108863;
};
