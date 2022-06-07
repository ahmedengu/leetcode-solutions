# @param {Integer[]} nums1
# @param {Integer} m
# @param {Integer[]} nums2
# @param {Integer} n
# @return {Void} Do not return anything, modify nums1 in-place instead.
def merge(arr, m, nums2, n)
  nums1 = arr.dup[0, m]
  i = 0
  j = 0
  k = 0
  while nums1[j] && nums2[k] do
    if nums1[j] < nums2[k]
      arr[i] = nums1[j]
      j += 1
    else
      arr[i] = nums2[k]
      k += 1
    end
    i += 1
  end
  while nums1[j] do
    arr[i] = nums1[j]
    j += 1
    i += 1
  end
  while nums2[k] do
    arr[i] = nums2[k]
    k += 1
    i += 1
  end
end
