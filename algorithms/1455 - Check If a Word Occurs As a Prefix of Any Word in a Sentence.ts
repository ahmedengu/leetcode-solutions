function isPrefixOfWord(sentence: string, searchWord: string): number {
    const found = sentence.split(' ').findIndex(word => word.startsWith(searchWord));

    return found === -1 ? -1 : found + 1;
};
