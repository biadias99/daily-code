/* 
- Name: 112. Path Sum
- Description: Given the root of a binary tree and an integer targetSum,
return true if the tree has a root-to-leaf path such that adding up all
the values along the path equals targetSum.
- My line of thought: Use recursion to traverse the tree, subtracting the node values
from targetSum until reaching a leaf node.
- Time complexity: O(n)
- Space complexity: O(n)
*/

function hasPathSum(root, targetSum) {
    if (!root) return false;

    if (!root.left && !root.right) return root.val === targetSum;

    return hasPathSum(root.left, targetSum - root.val) || 
           hasPathSum(root.right, targetSum - root.val);
}