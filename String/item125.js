/* 
- Name: 125. Valid Palindrome
- Description: A phrase is a palindrome if, after converting all uppercase letters
into lowercase letters and removing all non-alphanumeric characters,
it reads the same forward and backward. Alphanumeric characters include letters and numbers.
- My line of thought: I can iterate through the string, checking if each character is alphanumeric.
If it is, I will convert it to lowercase and push it into an array. 
Then, I will check if the array is equal to its reverse.
- Time complexity: O(n)
- Space complexity: O(n)
*/

var isPalindrome = function(s) {
    let word = [];
    let code = '';
    
    for (let i = 0; i < s.length; i++) {
        code = s[i].charCodeAt(0);

        // Letras maiúsculas (A-Z): 65-90
        // Letras minúsculas (a-z): 97-122
        // Dígitos (0-9): 48-57

        if (
            (code >= 65 && code <= 90) ||
            (code >= 97 && code <= 122) ||
            (code >= 48 && code <= 57)
        ) {
            word.push(s[i].toLowerCase());
        }
    }

    return word.join('') === [...word].reverse().join('');
};