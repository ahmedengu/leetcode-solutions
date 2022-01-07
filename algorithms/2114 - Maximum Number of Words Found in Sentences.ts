function mostWordsFound(sentences: string[]): number {
    return _.max(sentences.map(w => w.split(' ').length));
};
