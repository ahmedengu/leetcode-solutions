function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
    let ret = 0,
        len = arr.length;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = j + 1; k < len; k++) {
                if (Math.abs(arr[i] - arr[j]) <= a &&
                    Math.abs(arr[j] - arr[k]) <= b &&
                    Math.abs(arr[i] - arr[k]) <= c) {
                    ret++;
                }

            }
        }
    }

    return ret;
};
