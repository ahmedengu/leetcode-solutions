function strStr(haystack: string, needle: string): number {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.substr(i, needle.length) === needle) return i;
    }
    return haystack === needle ? 0 : -1;
};
