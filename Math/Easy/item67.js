/* 
- Name: 67. Add Binary
- Description: Given two binary strings a and b, return their sum as a binary string.
- My line of thought: Transform both binar strings to number. Then, add them and convert them
to binary again.
- Time complexity: O(n)
- Space complexity: O(n)
*/

function addBinary(b1, b2) {
    let sum = 0n; // Needs to be a bigInt because of larger inputs
    let j = 0;
    let i = 0;

    // Transform b1 to number
    for(i = b1.length - 1, j = 0n; i >= 0; i--, j++) {
        if (b1[i] === '1') sum += 1n << j;
    }

    // Transform b2 to number
    for(i = b2.length - 1, j = 0n; i >= 0; i--, j++) {
        if (b2[i] === '1') sum += 1n << j;
    }

    // Transform to binary again
    return sum.toString(2);
}

/*
    After studying a little bit more about the problem, I realized that I could just use the BigInt
    function to convert. But I decided to leave the first solution because I think it is another nice approach.

    var addBinary = function(a, b) {
        return (BigInt("0b"+a) + BigInt("0b"+b)).toString(2);
    }
*/
