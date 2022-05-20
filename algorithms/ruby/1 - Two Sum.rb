# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
  map = nums.map.with_index { |n, idx| [n, idx] }.to_h
  nums.each_with_index do |n, idx|
    if map[target - n].to_i > idx
      return [idx, map[target - n]]
    end
  end
end
