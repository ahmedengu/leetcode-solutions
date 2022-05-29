# @param {String[]} words
# @return {Integer}
def max_product(words)
  words.sort_by!(&:length).reverse!
  max = 0
  for i in 0..(words.length - 1) do
    for j in (i + 1)..(words.length - 1) do
      if words[i].count(words[j]) == 0
        max = [max, words[i].length * words[j].length].max
      end
    end
  end
  max
end
