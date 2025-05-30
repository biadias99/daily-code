/* 
- Name: 344. Reverse String
- Description: Write a function that reverses a string. The input string is given as an array
of characters s.
- My line of thought: I can iterate through the string, swapping the characters at the beginning and end
of the array until I reach the middle.
- Time complexity: O(n)
- Space complexity: O(1)
*/

function reverseString(s) {
    for(let i = 0; i < s.length / 2; i++) {
        let aux = s[i];
        s[i] = s[s.length - (i + 1)];
        s[s.length - (i + 1)] = aux;
    }
}