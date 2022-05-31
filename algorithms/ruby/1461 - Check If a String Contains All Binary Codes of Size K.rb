# @param {String} s
# @param {Integer} k
# @return {Boolean}
def has_all_codes(s, k)
  need = 1 << k
  set = Set.new
  for i in k..s.length do
    unless set === s[i - k, k]
      set << s[i - k, k]
      need -= 1
      if need === 0
        return true
      end
    end
  end
  false
end
