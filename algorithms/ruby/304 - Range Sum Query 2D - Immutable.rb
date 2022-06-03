class NumMatrix

=begin
    :type matrix: Integer[][]
=end
  def initialize(matrix)
    @dp = Array.new(matrix.length) { Array.new(matrix[0].length + 1, 0) }
    for r in 0...matrix.length do
      for c in 0...matrix[0].length do
        @dp[r][c + 1] = @dp[r][c] + matrix[r][c]
      end
    end
  end

=begin
    :type row1: Integer
    :type col1: Integer
    :type row2: Integer
    :type col2: Integer
    :rtype: Integer
=end
  def sum_region(row1, col1, row2, col2)
    sum = 0
    for row in row1..row2 do
      sum += @dp[row][col2 + 1] - @dp[row][col1]
    end
    sum
  end

end

# Your NumMatrix object will be instantiated and called as such:
# obj = NumMatrix.new(matrix)
# param_1 = obj.sum_region(row1, col1, row2, col2)
