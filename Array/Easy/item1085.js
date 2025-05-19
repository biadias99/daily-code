/* 
- Name: 1085. Sum of Digits in the Minimum Number
- Description: Given an array A of positive integers, let S be the sum of the digits of the minimal element of A.
Return 0 if S is odd, otherwise return 1.
- My line of thought: First of all, find the minor number and then separate the
characters, sum then and check is it is odd or not.
- Time complexity: O(n)
- Space complexity: O(log m) because I did not use any extra space.
*/

function sumOfDigits (s) {
    if(s.length == 0) return 0;
    
    let minor = s[0];
    let sum = 0;

    for (let x of s) {
        if (x < minor) {
            minor = x;
        }
    }

    minor = Math.abs(minor).toString();

    for (let i = 0; i < minor.length; i++) {
        sum+= Number(minor[i]);
    }
    
    return sum % 2 === 0 ? 1 : 0;
}
