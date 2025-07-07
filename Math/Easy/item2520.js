/* 
- Name: 2520. Count the Digits That Divide a Number
- Description: Given an integer num, return the number of digits in num that divide num.
- My line of thought: Just convert the number to a string, iterate through each digit,
  and check if the digit divides the number evenly. If it does, increment the count.
  Note that we need to convert the character back to a number for the modulus operation.
- Time complexity: O(n)
- Space complexity: O(1)
*/

var countDigits = function(num) {
    let string = num.toString();
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        if (num % +string[i] == 0) {
            count++;
        }
    }

    return count;
};