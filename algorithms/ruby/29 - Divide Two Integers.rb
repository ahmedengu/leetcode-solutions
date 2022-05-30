# @param {Integer} dividend
# @param {Integer} divisor
# @return {Integer}
def divide(dividend, divisor)
  sign = (dividend > 0) === (divisor > 0) ? 1 : -1
  a = dividend.abs
  b = divisor.abs
  if (a == 1 << 31 && b == 1)
    return sign === 1 ? (1 << 31) - 1 : -(1 << 31)
  end
  ret = 0
  x = 31
  while x >= 0 do
    if (a >> x) - b >= 0
      ret += 1 << x
      a -= b << x
    end
    x -= 1
  end

  ret * sign
end
