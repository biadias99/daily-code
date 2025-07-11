/* 
- Name: 2595. Count Even and Odd Bits
- Description: Return the array [even, odd].
- My line of thought: Iterate through the binary representation of the number,
counting the number of 1s in even and odd positions.
- Time complexity: O(n)
- Space complexity: O(1)
*/


var evenOddBit = function(n) {
    let binary = n.toString(2).split('').reverse();
    let evenAndOdd = [0, 0]

    for(let i = 0; i < binary.length; i++) {
        if (binary[i] == 1) {
            if (i % 2 == 0) {
                evenAndOdd[0]++;
            } else {
                evenAndOdd[1]++;
            }
        }
    }

    return evenAndOdd;
};