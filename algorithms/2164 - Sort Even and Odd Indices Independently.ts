function sortEvenOdd(nums: number[]): number[] {
    const even = nums.filter((n, i) => i % 2 === 0).sort((a, b) => b - a);
    const odd = nums.filter((n, i) => i % 2 === 1).sort((a, b) => a - b);
    const ret = [];
    while (even.length || odd.length) {
        ret.push(even.pop());
        if (odd.length)
            ret.push(odd.pop());
    }
    return ret;
};
