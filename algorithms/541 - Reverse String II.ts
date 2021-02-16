function reverseStr(s: string, k: number): string {
    const arr = s.split('');
    let i, j;
    for (let start = 0; start < arr.length; start += 2 * k) {
        i = start;
        j = Math.min(i + k - 1, arr.length - 1);
        while (i < j)[arr[i++], arr[j--]] = [arr[j], arr[i]];
    }
    return arr.join('');
};
