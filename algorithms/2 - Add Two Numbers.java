/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
			int c=0;
			ListNode t=null, ret=new ListNode(0);
			t=ret;
			while (l1!=null||l2!=null) {
				if(l1!=null){
					c+=l1.val;
					l1=l1.next;
				}
				if(l2!=null){
					c+=l2.val;
					l2=l2.next;
				}
				if(c>0){
				t.next=new ListNode((c>0)?c%10:0);
				c/=10;
				t=t.next;
				}else{
					t.next=new ListNode(0);
					t=t.next;
				}
			}
			if(c==1)t.next=new ListNode(1);
		return ret.next;
    }
}
