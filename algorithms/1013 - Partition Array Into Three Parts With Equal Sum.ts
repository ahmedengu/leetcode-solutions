function canThreePartsEqualSum(arr: number[]): boolean {
    const partsSum = _.sum(arr) / 3;
    if (!Number.isInteger(partsSum)) return false;

    let currentSum = 0;
    let parts = 0;

    for (const num of arr) {
        currentSum += num;
        if (currentSum === partsSum) {
            currentSum = 0;
            parts++;
            if (parts === 3) return true;
        }
    }

    return false;
};
