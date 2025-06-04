/* 
- Name: 144. Binary Tree Preorder Traversal
- Description: Given the root of a binary tree, return the preorder traversal of
its nodes' values.
- My line of thought: Use depth-first search (DFS) to visit the root node first,
then the left subtree, and finally the right subtree.
- Time complexity: O(n)
- Space complexity: O(n)
*/

function preorderTraversal (node) {
    let order = [];

    function dfs (node) {
        if (!node) return;
        
        order.push(node.val);

        dfs(node.left);      
        dfs(node.right);     
    }

    dfs(node);
    
    return order;
}


