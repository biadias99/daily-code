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

/*

After studying a little bit more, I realized two other ways to solve this problem:

Time: O(n) - where n is the length of the string
Space: O(n) - where n is the length of the string

function isPalindrome(string) {
  let newString = [];
  
  for (let i = string.length - 1; i >= 0; i--) {
    newString.push(string[i]);
  }

  return newString.join('') == string;
}

Time: O(n) - where n is the length of the string
Space: O(1) - no extra space used

function isPalindromeOptimized(string) {
  let left = 0;
  let right = string.length - 1;
  
  while (left < right) {
    if (string[left] !== string[right]) return false;
    left++;
    right--;
  }
  
  return true;
}

*/