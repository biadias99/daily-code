/* 
- Name: 2000. Reverse Prefix of Word
- Description: Given a 0-indexed string word and a character ch, reverse the segment of word that
starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character
ch does not exist in word, do nothing.
- My line of thought: Use a flag to check if the character has been found, and an array to build the new string.
- Time complexity: O(n)
- Space complexity: O(n)
*/

function reversePrefix(word, ch) {
    let notFound = true;
    let wordUntilCh = [];

    for (let i = 0; i < word.length; i++) {
        wordUntilCh.push(word[i]);

        if (word[i] == ch && notFound) {
            notFound = false;
            wordUntilCh.reverse();
        }
    }

    return wordUntilCh.join('');
}