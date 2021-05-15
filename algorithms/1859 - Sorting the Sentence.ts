function sortSentence(s: string): string {
    return _.sortBy(s.split(' '), str => str.slice(-1))
        .map(str => str.slice(0, -1))
        .join(' ');
};
