# @param {String} s
# @return {Integer}
def length_of_longest_substring(s)
    start = 0
    max = 0
    map = {}
    i = 0
    while i < s.length do
        if map[s[i]]
            map = {}
            start += 1
            i = start
        end
        map[s[i]] = true
        max = [max, i - start + 1].max
        i += 1
    end
    max
end
