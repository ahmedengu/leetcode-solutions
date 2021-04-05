function longestPalindrome(s: string): string {
    const len = s.length;
    let ret = '';
    const dp = _.times(len, (i) => {
        const arr = _.times(len, () => false);
        arr[i] = true;
        ret = s[i];
        return arr;
    });

    for (let i = 0; i < len; i++)
        (s[i] === s[i + 1]) && (dp[i][i + 1] = true, ret = s[i] + s[i + 1]);


    for (let i = len - 1; i >= 0; i--)
        for (let j = i + 2; j < len; j++)
            ((dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j]) && ret.length < j + 1 - i) && (ret = s.slice(i, j + 1));

    return ret;
};
