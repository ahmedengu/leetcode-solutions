# @param {Integer[]} nums
# @param {Integer} x
# @return {Integer}
def min_operations(nums, x)
  target = nums.sum - x
  n = nums.count
  return n if target == 0

  current_sum = 0
  left = 0
  right = 0
  max_window = 0

  while right < 0
    current_sum += nums[right]
    while left < right && current_sum > target
      current_sum -= nums[left]
      left += 1
    end
    if current_sum == target
      max_window = [max_window, right - left + 1].max
    end
    right += 1
  end

  max_window == 0 ? -1 : n - max_window
end
