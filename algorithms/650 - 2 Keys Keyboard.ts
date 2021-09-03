function minSteps(n: number): number {
    let d = 2;
    let steps = 0;

    while (n > 1) {
        while (n % d === 0) {
            steps += d;
            n /= d;
        }
        d++;
    }

    return steps;
};
