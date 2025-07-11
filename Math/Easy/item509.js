/* 
- Name: 509. Fibonacci Number
- Description: The Fibonacci numbers, commonly denoted F(n) form a sequence, called the
Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.
- My line of thought: Just create an array to store the Fibonacci numbers and iterate through it
to calculate the next number in the sequence until reaching n.
- Time complexity: O(n)
- Space complexity: O(n)
*/

var fib = function(n) {
    let array = [ 0, 1 ];

    if (n == 0 || n == 1) return n;

    for (let i = 2; i <= n; i++) {
        array.push(array[i - 1] + array[i - 2]);
    }

    return array.pop();
};