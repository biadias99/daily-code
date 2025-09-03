/* 
- Name: 338. Counting Bits
- Description: Given an integer n, return an array ans of length n + 1 such that
for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation
of i.
- My line of thought: Select each number from 0 to n, convert it to binary, remove
the zeros and count the ones.
- Time complexity: O(n * log n)
- Space complexity: O(n)
*/

var countBits = function(n) {
    let x = [];

    for (let i = 0; i <= n; i++) {
        x.push(i.toString(2).split("0").join("").length);
    }
    
    return x;
}