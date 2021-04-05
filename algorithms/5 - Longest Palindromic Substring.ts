function longestPalindrome(s: string): string {
    let max = '';
    for (let i = 0; i < s.length; i++)
        for (let j = s.length - 1; j >= i; j--)
            if (max.length < j - i + 1 && isPalindrom(s, i, j)) max = s.slice(i, j + 1);
    return max;
};

const isPalindrom = (s, l, r) => {
    while (l < r)
        if (s[l++] !== s[r--]) return false;

    return true;
};
