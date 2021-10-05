function halvesAreAlike(s: string): boolean {
    const notVowels = /[^aeiou]/gi;
    return s.slice(0, s.length / 2).replace(notVowels, '').length === s.slice(s.length / 2).replace(notVowels, '').length;
};
