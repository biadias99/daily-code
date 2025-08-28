/* 
- Name: 100. Same Tree
- Description: Given the roots of two binary trees p and q, write a function to
check if they are the same or not.
- My line of thought: Use recursion to compare the values of each node
and their respective left and right children.
- Time complexity: O(n)
- Space complexity: O(n)
*/

function isSameTree(p, q) {
    if (p == null && q == null) return true;
    if (p == null || q == null || p.val != q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}