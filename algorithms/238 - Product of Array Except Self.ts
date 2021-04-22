function productExceptSelf(nums: number[]): number[] {
    let zeros = 0;
    const product = nums.reduce((acc, num) => num ? acc * num : ++zeros && acc, 1);
    return nums.map(num => {
        if (num && !zeros) return product / num;
        if (!num && zeros === 1) return product;
        return 0;
    });
};
