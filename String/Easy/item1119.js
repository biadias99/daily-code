/* 
- Name: 1119. Remove Vowels from a String
- Description: Given a string S, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it,
and return the new string.
- My line of thought: Pretty simple, just walk through the string and
add into another string the elements that are not vowel.
*/

function removeVowel(s) {
    let result = '';
    
    for(let i = 0; i < s.length; i++) {
        if (!['a', 'e', 'i', 'o', 'u'].includes(s[i])) {
            result += s[i];
        }
    }
    
    return result;
}
