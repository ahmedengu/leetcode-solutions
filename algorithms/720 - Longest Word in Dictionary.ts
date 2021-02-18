function longestWord(words: string[]): string {
    words.sort((a, b) => (b.length - a.length) || a.localeCompare(b));
    const set = new Set(words);
    for (const word of words) {
        let flag = true;

        for (let i = word.length - 1; i > 0; i--)
            flag = flag && set.has(word.slice(0, i));

        if (flag) return word;
    }
    return '';
};
