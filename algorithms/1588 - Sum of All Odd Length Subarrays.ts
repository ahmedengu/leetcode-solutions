function sumOddLengthSubarrays(arr: number[]): number {
    const len = arr.length;
    let sum = 0;
    for (let inc = 0; inc < len; inc += 2)
        for (let i = 0; i < len - inc; i++)
            for (let j = 0; j <= inc; j++)
                sum += arr[i + j];
    return sum;
};
