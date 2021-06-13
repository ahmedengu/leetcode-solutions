function makeEqual(words: string[]): boolean {
    return _
        .chain(words)
        .join('')
        .countBy()
        .every(n => n % words.length === 0)
        .value();
};
