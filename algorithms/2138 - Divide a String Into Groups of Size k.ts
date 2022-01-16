function divideString(s: string, k: number, fill: string): string[] {
    const ret = [''];
    for (let i = 0; i < s.length; i++) {
        if (ret[ret.length - 1]?.length >= k) ret.push('');
        ret[ret.length - 1] += s[i];
    }
    if (ret[ret.length - 1].length < k) ret[ret.length - 1] += fill.repeat(k - ret[ret.length - 1].length);
    return ret;
};
