/* 
- Name: 682. Baseball Game
- Description: Return the sum of all the scores on the record after applying all the operations.
- My line of thought: Use a stack to keep track of the scores. For each operation:
  - If the operation is a number, push it to the stack.
  - If the operation is 'C', pop the last score from the stack.
  - If the operation is 'D', double the last score and push it to the stack.
  - If the operation is '+', sum the last two scores and push the result to the
- Time complexity: O(n) - where n is the number of operations
- Space complexity: O(n) - where n is the number of operations
*/

function calPoints(operations) {
    let stack = [];

    for(let x of operations) {
        if (x === '+') {    
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        } else if (x == 'C') {
            stack.pop();
        } else if (x == 'D') {
            stack.push(stack[stack.length - 1] * 2);
        } else {
            stack.push(+x);
        }
    }

    return stack.reduce((a, b) => a + b, 0);
}