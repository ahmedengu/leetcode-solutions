function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    return nums1.map(num => _.find(nums2, (n) => n > num, nums2.indexOf(num) + 1) || -1);
};
