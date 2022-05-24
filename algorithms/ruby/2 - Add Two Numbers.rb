# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def add_two_numbers(l1, l2)
  head = ListNode.new 0
  p = l1
  q = l2
  curr = head
  carry = 0

  while p || q do
    x = p ? p.val : 0
    y = q ? q.val : 0
    sum = carry + x + y
    carry = sum / 10
    curr.next = ListNode.new sum % 10
    curr = curr.next
    p = p.next if p
    q = q.next if q
  end

  if carry > 0
    curr.next = ListNode.new carry
  end
  head.next
end
