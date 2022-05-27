# @param {Integer} num
# @return {Integer}
def number_of_steps(num)
  ret = 0
  while num > 0 do
    ret += 1
    num = num % 2 === 0 ? num / 2 : num - 1
  end
  ret
end
