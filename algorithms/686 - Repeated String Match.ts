function repeatedStringMatch(a: string, b: string): number {
    const q = Math.floor((b.length - 1) / a.length + 1);
    for (let i = 0; i < 2; i++)
        if (a.repeat(q + i).includes(b)) return q + i;
    return -1;
};
