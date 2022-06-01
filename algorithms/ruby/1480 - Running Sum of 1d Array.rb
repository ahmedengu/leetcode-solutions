# @param {Integer[]} nums
# @return {Integer[]}
def running_sum(nums)
  sum = 0
  nums.map { |n| sum += n }
end
