/* 
- Name: 190. Reverse Bits
- Description: Reverse bits of a given 32 bits unsigned integer.
- My line of thought: Convert the number to binary, reverse the string, and convert it back to a number.
- Time complexity: O(1)
- Space complexity: O(1)
*/

function reverseBits(n) {
    let bin = n.toString(2).padStart(32, '0').split('').reverse().join('');
    return parseInt(bin, 2);
}