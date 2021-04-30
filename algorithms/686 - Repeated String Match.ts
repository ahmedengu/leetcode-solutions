function repeatedStringMatch(a: string, b: string): number {
    let q = Math.ceil(b.length / a.length);
    if (a.repeat(q).includes(b)) return q;
    if (a.repeat(++q).includes(b)) return q;
    return -1;
};
