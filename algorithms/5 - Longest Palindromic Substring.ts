function longestPalindrome(s: string): string {
    const len = s.length;
    let l = 0;
    let r = 0;
    for (let i = 0; i < len; i++)
        for (let j = i; j < len; j++)
            if (r - l < j - i && isPalindrom(s, i, j)) l = i, r = j;
    return s.slice(l, r + 1);
};

const isPalindrom = (s, l, r) => {
    while (l < r)
        if (s[l++] !== s[r--]) return false;

    return true;
};
