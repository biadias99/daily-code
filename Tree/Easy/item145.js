/* 
- Name: 145. Binary Tree Postorder Traversal
- Description: Given the root of a binary tree, return the postorder
traversal of its nodes' values.
- My line of thought: Use breadth-first search (BFS) to visit the left subtree first,
then the right subtree, and finally the root node. This can be achieved using a stack
to simulate the postorder traversal.
- Time complexity: O(n)
- Space complexity: O(n)
*/

function postorderTraversal(root) {
    if (!root) return [];
    // Using a stack to simulate the postorder traversal

    const stack = [];
    const output = [];
    
    stack.push(root); // almost bfs but with some differences

    while (stack.length > 0) {
        const node = stack.pop();
        output.push(node.val);
        
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }

    return output.reverse();
};