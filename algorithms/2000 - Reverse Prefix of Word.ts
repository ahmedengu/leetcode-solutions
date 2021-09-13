function reversePrefix(word: string, ch: string): string {
    const idx = word.indexOf(ch) + 1;
    return word.slice(0, idx).split('').reverse().join('') + word.slice(idx);
};
