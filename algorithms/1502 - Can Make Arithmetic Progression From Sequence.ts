function canMakeArithmeticProgression(arr: number[]): boolean {
    arr.sort((a, b) => a - b);
    let prog = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i += 1)
        if (arr[i] - arr[i - 1] !== prog) return false;
    return true;
};
