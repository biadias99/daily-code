/* 
- Name: 58. Length of Last Word
- Description: Given a string s consisting of words and spaces,
return the length of the last word in the string.
- My line of thought: Split the string into an array of words and iterate and
find the last word. If it is not empty, it is because it is the last word. 
The for stopped when the last word is found.
- Time complexity: O(n)
- Space complexity: O(n)
*/

function lengthOfLastWord (s) {
    var lastWord = 0;
    var sArr = s.split(' ');

    for(var i = sArr.length - 1; i >= 0 && lastWord == 0; i--) {
        if(sArr[i].trim() != '') 
            lastWord = sArr[i].length;
    }

    return lastWord;
}

console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6