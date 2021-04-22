function productExceptSelf(nums: number[]): number[] {
    let zeros = 0;
    const product = nums.reduce((acc, num) => num ? acc * num : ++zeros && acc, 1);
    return nums.map(num => (num && !zeros || !num && zeros === 1 ? product : 0) / (num && !zeros ? num : 1));
};
