class Solution:
    def canBeIncreasing(self, nums: List[int]) -> bool:
        for i in range(len(nums)):
            if self.isIncreasing([nums[j] for j in range(len(nums)) if j != i]):
                return True
        return False
    
    def isIncreasing(self, nums: List[int]) -> bool:
        for i in range(len(nums)):
            if i > 0 and nums[i] <= nums[i-1]:
                return False
        return True
