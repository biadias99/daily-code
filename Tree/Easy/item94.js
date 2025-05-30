/* 
- Name: 94. Binary Tree Inorder Traversal
- Description: Given the root of a binary tree, return the inorder
traversal of its nodes' values.
- My line of thought: Visit all the nodes in the left subtree,
then the root node, and finally the nodes in the right subtree.
- Time complexity: O(n)
- Space complexity: O(n)
*/

function inorderTraversal(root) {
    let array = [];

    function inorder(n) {
        if (!n) return;

        inorder(n.left); 
        array.push(n.val);
        inorder(n.right);
    }

    inorder(root);
    return array;
}

/*

    How it works?

    With a tree like this:
         1
        / \
       2   3
        / \
       4   5

    The function would work like this:

    inOrderTraversal(tree);
    array = [];
    inorder(1);
    inorder(left of node 1) => inorder(2);
    inorder(left of node 2) => inorder(4);
    inorder(left of node 4) => inorder(null); => return;
    goes back to function inorder(4);
    inorder(4) => array.push(4);
    inorder(4) => inorder(right of node 4) => inorder(null); => return;
    goes back to function inorder(2);
    inorder(2) => array.push(2);
    inorder(2) => inorder(right of node 2) => inorder(5);
    inorder(5) => inorder(left of node 5) => inorder(null); => return;
    inorder(5) => array.push(5);
    inorder(5) => inorder(right of node 5) => inorder(null); => return;
    goes back to function inorder(2);
    inorder(2) => return;
    goes back to function inorder(1);
    inorder(1) => array.push(1);
    inorder(1) => inorder(right of node 1) => inorder(3);
    inorder(3) => inorder(left of node 3) => inorder(null); => return;
    inorder(3) => array.push(3);
    inorder(3) => inorder(right of node 3) => inorder(null); => return;
    goes back to function inorder(1);
    inorder(1) => return;   
*/