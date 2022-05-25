# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} list1
# @param {ListNode} list2
# @return {ListNode}
def merge_two_lists(list1, list2)
  head = ListNode.new 0
  curr = head
  while list1 && list2 do
    if list1.val < list2.val
      curr.next = ListNode.new list1.val
      curr = curr.next
      list1 = list1.next
    else
      curr.next = ListNode.new list2.val
      curr = curr.next
      list2 = list2.next
    end
  end
  while list1 do
    curr.next = ListNode.new list1.val
    curr = curr.next
    list1 = list1.next
  end
  while list2 do
    curr.next = ListNode.new list2.val
    curr = curr.next
    list2 = list2.next
  end
  head.next
end
