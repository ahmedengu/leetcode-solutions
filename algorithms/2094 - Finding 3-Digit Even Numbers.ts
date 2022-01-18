function findEvenNumbers(digits: number[]): number[] {
    const ret = new Set();
    const len = digits.length;
    for (let i = 0; i < len; i++) {
        if (digits[i]) {
            for (let j = 0; j < len; j++) {
                for (let k = 0; k < len; k++) {
                    if (i !== j && j !== k && k !== i && digits[k] % 2 === 0) {
                        ret.add(Number(`${digits[i]}${digits[j]}${digits[k]}`));
                    }
                }

            }
        }
    }
    return _.sortBy([...ret]);
};
