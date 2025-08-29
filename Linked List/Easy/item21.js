/* 
- Name: 21. Merge Two Sorted Lists
- Description: Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
- My line of thought: After studying recursion, I realized that I can use it to solve this problem elegantly.
- Time complexity: O(n)
- Space complexity: O(n)
*/

function mergeTwoLists (list1, list2) {
    if (!list1) return list2;
    else if (!list2) return list1;
    else if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
}