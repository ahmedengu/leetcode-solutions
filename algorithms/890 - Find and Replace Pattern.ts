function findAndReplacePattern(words: string[], pattern: string): string[] {
    return words.filter(word => {
        let tmp = pattern;
        const map = {};
        for (let i = 0; i < word.length && tmp.length; i++) {
            if (!map[word[i]]) {
                map[word[i]] = tmp[0];
                tmp = tmp.replace(RegExp(tmp[0], 'g'), '');
            }
        }
        return !tmp && word.split('').map(c => map[c]).join('') === pattern
    });
};
