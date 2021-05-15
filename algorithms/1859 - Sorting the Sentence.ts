function sortSentence(s: string): string {
    return _
        .chain(s)
        .split(' ')
        .sortBy(str => +str.slice(-1))
        .map(str => str.slice(0, -1))
        .join(' ');
};
