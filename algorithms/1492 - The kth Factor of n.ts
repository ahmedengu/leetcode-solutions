function kthFactor(n: number, k: number): number {
    const factors = [1];
    for (let i = 2; i <= n / 2 && factors.length < k; i++)
        if (n % i === 0)
            factors.push(i);
    factors.push(n);
    return factors[k - 1] || -1;
};
