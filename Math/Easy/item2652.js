/* 
- Name: 2652. Sum of Multiples
- Description: Given a positive integer n, find the sum of all integers in the range [1, n] inclusive
that are divisible by 3, 5, or 7.
- My line of thought: Just iterate through the numbers from 1 to n, check if each number is divisible by 3, 5, or 7,
and sum them up.
- Time complexity: O(n)
- Space complexity: O(1)
*/

var sumOfMultiples = function(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0 || i % 6 === 0 || i % 7 === 0){
            sum += i;
        }
    }
    
    return sum;
};