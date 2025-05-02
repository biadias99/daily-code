/* 
- Name: 66. Plus One
- Description: You are given a large integer represented as an integer array digits,
where each digits[i] is the ith digit of the integer. The digits are ordered from most
significant to least significant in left-to-right order. The large integer does not
contain any leading 0's.
- My line of thought: Convert the number to a string and then to a BigInt.
Then, add one and convert it back to an array.
- Time complexity: O(n)
- Space complexity: O(n)
- Runtime beats: 100%
- Memory beats: 88.89%
*/

function plusOne(digits) {
    // Convert number to string and convert to bigint
    let num = BigInt(digits.join(""));

    // Add one
    num++;

    // Convert back to array
    num = num.toString();

    // Transform each char to integer again
    for(var i = 0; i < num.length; i++) {
        digits[i] = +num[i];
    }

    return digits;
}

