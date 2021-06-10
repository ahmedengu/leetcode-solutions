function longestNiceSubstring(s: string): string {
    const len = s.length;
    let max = '';
    for (let i = 0; i < len - 1; i++) {
        const str = [s[i]];
        for (let j = i + 1; j < len; j++) {
            str.push(s[j]);
            if (isNice(str) && str.length > max.length) max = str.join('')
        }
    }
    return max;
};

const isNice = (str) => {
    for (const c of str)
        if (!str.includes(c.toLowerCase()) || !str.includes(c.toUpperCase()))
            return false;
    return true;
}
