/* 
- Name: 20. Valid Parentheses
- Description: Given a string s containing just the characters
'(', ')', '{', '}', '[' and ']', determine if the input string
is valid.
- My line of thought: If it is an opening bracket, I put it in the stack.
If it is a closing bracket, I will check if the last element in the stack
is not the opening bracket equivalent or if the stack is empty. Otherwise,
I will remove the last element.
- Time complexity: O(n)
- Space complexity: O(n)
*/

function isValid(s) {
    // Stack to see if is a match or not
    let match = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    let stack = []; // Initialize empty

    for (let char of s) {
        if (['{', '[', '('].includes(char)) { // Open, put in the stack
            stack.push(char);
        } else {
            // stack.length == 0 - it does not have anything to match
            if (stack.length == 0 || stack[stack.length - 1] != match[char]) {
                return false;
            }
            stack.pop(); // take it off the opening bracket from the stack bc found it
        }
    }

    return stack.length == 0 // if true, it is balanced, if not it is not balanced
}