function binaryGap(n: number): number {
    const s = n.toString(2);
    let max = 0;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        count++;
        if (s[i + 1] === '1') {
            if (count > max) max = count;
            count = 0;
        }
    }

    return max;
};
