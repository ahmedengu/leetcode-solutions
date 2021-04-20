function majorityElement(nums: number[]): number[] {
    const ret = [];
    let num1, num2;
    let count1 = 0;
    let count2 = 0;

    nums.forEach(num => {
        if (num === num1) {
            count1++;
        } else if (num === num2) {
            count2++;
        } else if (count1 === 0) {
            count1++;
            num1 = num;
        } else if (count2 === 0) {
            count2++;
            num2 = num;
        } else {
            count1--;
            count2--;
        }
    });

    count1 = count2 = 0;
    nums.forEach(num => num === num1 && count1++);
    nums.forEach(num => num === num2 && count2++);

    const threshold = Math.floor(nums.length / 3);
    if (count1 > threshold) ret.push(num1);
    if (count2 > threshold) ret.push(num2);

    return ret;
};
