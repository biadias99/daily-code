/* 
- Name: 1662. Check If Two String Arrays are Equivalent
- Description: Given two string arrays word1 and word2, return true if the two arrays represent
the same string, and false otherwise.
- My line of thought: Pretty straightforward, just join the two arrays into strings and compare them.
- Time complexity: O(n)
- Space complexity: O(n)
*/

function arrayStringsAreEqual(word1, word2) {
    return word1.join('') === word2.join('')
}