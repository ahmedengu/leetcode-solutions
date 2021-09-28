function tribonacci(n: number): number {
    if (mem[n] !== undefined) return mem[n];
    for (let i = 3; i <= n; i++) {
        mem[i] = mem[i - 1] + mem[i - 2] + mem[i - 3];
    }
    return mem[n];
};

const mem = {
    0: 0,
    1: 1,
    2: 1
};
