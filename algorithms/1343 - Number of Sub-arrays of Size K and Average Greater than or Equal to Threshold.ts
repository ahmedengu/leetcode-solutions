function numOfSubarrays(arr: number[], k: number, threshold: number): number {
    threshold *= k;
    let sum = 0;
    for (let i = 0; i < k; i++)
        sum += arr[i];

    let ret = sum >= threshold ? 1 : 0;
    for (let i = k; i < arr.length; i++) {
        sum += arr[i] - arr[i - k];
        if (sum >= threshold) ret++;
    }

    return ret;
};
