function areOccurrencesEqual(s: string): boolean {
    const map = _.countBy(s);
    return Object.keys(map).every(key => map[key] === map[s[0]]);
};
