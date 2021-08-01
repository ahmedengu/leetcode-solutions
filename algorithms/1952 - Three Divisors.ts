function isThree(n: number): boolean {
    let divisors = 2;
    for (let i = 2; i <= n / 2; i++)
        if (n % i === 0)
            divisors++;
    return divisors === 3;
};
