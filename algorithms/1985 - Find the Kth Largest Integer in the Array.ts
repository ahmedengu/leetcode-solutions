function kthLargestNumber(nums: string[], k: number): string {
    return nums.sort(compare)[k - 1];
};

const compare = (a: string, b: string): number => {
    if (a === b) return 0;
    for (let i = 0;; i++) {
        if (a[i] < b[i] && a.length <= b.length || !a[i])
            return 1;
        if (a[i] > b[i] && a.length >= b.length || !b[i])
            return -1;
    }
}
