# @param {Integer[]} nums
# @return {Integer}
def missing_number(nums)
  nums = nums.to_set
  n = 0
  while nums === n do
    n += 1
  end
  n
end
