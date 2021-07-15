function countTriples(n: number): number {
    let count = 0;
    for (let a = 1; a <= n; a++)
        for (let b = 1; b <= n; b++) {
            const c = Math.sqrt(a * a + b * b);
            if (c <= n && Number.isInteger(c)) count++;
        }
    return count;
};
