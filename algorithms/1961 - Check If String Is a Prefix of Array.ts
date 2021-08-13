function isPrefixString(s: string, words: string[]): boolean {
    for (let i = 0; i < words.length && s && s.startsWith(words[i]); i++)
        s = s.replace(words[i], '');
    return !s;
};
