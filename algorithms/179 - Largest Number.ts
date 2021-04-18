function largestNumber(nums: number[]): string {
    return nums.sort((a, b) => +`${b}${a}` - +`${a}${b}`).join('').replace(/^0+/, '') || '0';
};
