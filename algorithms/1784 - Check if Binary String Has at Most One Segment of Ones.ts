function checkOnesSegment(s: string): boolean {
    for (let i = 0; i < s.length; i++)
        if (s[i] === '1' && s[i - 1] === '0') return false;

    return true;
};
