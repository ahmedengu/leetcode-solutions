# @param {Integer[]} numbers
# @param {Integer} target
# @return {Integer[]}
def two_sum(numbers, target)
  numbers.each_with_index do |number, index|
    second_value = target - number
    second_index = numbers.bsearch_index { |n| second_value - n }
    return [index + 1, second_index + 1].sort if second_index && second_index != index
  end
end
