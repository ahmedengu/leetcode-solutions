# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
  i = 1
  while i < nums.length do
    if nums[i] === nums[i - 1]
      nums.delete_at(i)
    else
      i += 1
    end
  end
  nums.length
end
