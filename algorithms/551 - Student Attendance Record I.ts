function checkRecord(s: string): boolean {
    let a = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A' && ++a > 1) return false;
        if (s[i] === 'L' && s[i - 1] === 'L' && s[i - 2] === 'L') return false;
    }

    return true;
};
