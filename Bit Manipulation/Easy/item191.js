/* 
- Name: 191. Number of 1 Bits
- Description: Given a positive integer n, write a function that returns the number
of set bits in its binary representation (also known as the Hamming weight).
- My line of thought: Transform the number to its binary representation and count the
ones.
- Time complexity: O(log n)
- Space complexity: O(log n)
*/

function hammingWeight (n) {
    let count = 0;
    let string = Math.abs(n).toString(2);

    for(let i = 0; i < string.length; i++) {
        if (string[i] === '1') {
            count++;
        }
    }

    return count;
};