require 'set'
# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} headA
# @param {ListNode} headB
# @return {ListNode}
def getIntersectionNode(headA, headB)
  set = Set.new
  while headA do
    set << headA
    headA = headA.next
  end
  while headB do
    return headB if set === headB
    headB = headB.next
  end
end
