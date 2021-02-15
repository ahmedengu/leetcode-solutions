function getMaximumGenerated(n: number): number {
    if (n <= 1) return n;
    const arr = new Array(n + 1);
    arr[0] = 0;
    arr[1] = 1;

    for (let i = 1; i <= n; i++) {
        if (i * 2 <= n) arr[i * 2] = arr[i];
        if (i * 2 + 1 <= n) arr[i * 2 + 1] = arr[i] + arr[i + 1];
    }

    return Math.max(...arr);
};
