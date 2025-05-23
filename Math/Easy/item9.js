/* 
- Name: 9. Palindrome Number
- Description: Given an integer x, return true if x is a palindrome, and false otherwise.
- My line of thought: If one of the digits is different from each other, it is not a palindrome.
*/

function isPalindrome(x) {
    let s = x.toString();

    for(let i = 0; i < s.length; i++) {
        if (s[i] != s[s.length - i - 1]) {
            return false;
        }
    }

    return true;
}