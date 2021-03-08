function maxVowels(s: string, k: number): number {
    const vowels = new Set('aeiou');
    let count = _.filter(s.substr(0, k), x => vowels.has(x)).length,
        max = count;

    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) count++;
        if (vowels.has(s[i - k])) count--;
        if (count > max) max = count;
    }
    return max;
};
