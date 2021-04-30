function repeatedStringMatch(a: string, b: string): number {
    let q = Math.floor((b.length - 1) / a.length);
    if (a.repeat(++q).includes(b)) return q;
    if (a.repeat(++q).includes(b)) return q;
    return -1;
};
