/* 
- Name: 258. Add Digits
- Description: Given an integer num, repeatedly add all its digits until the result
has only one digit, and return it.
- My line of thought: I can convert the number to a string and iterate through it, summing the digits.
Then, I will check if the length of the string is greater than 1. If it is, I will repeat the process
until I have a single digit.
- Time complexity: O(log n)
- Space complexity: O(log n)
*/

function addDigits(n) {
    let s = n.toString();
    let sum = n;

    while (s.length > 1) {
        sum = 0;
        for(let digit of s) {
            sum += +digit;
        }
        s = sum.toString();
    }

    return sum;
}

/*
Studying a little bit more about the problem, I found a mathematical approach that
is much more efficient.

function addDigits(n) {
    return n === 0 ? 0 : 1 + (n - 1) % 9;
}

function addDigits(n) {
    if (n === 0) {
        return 0;
    }

    if (n % 9 === 0) {
        return 9;
    }

    return n % 9;
}
*/