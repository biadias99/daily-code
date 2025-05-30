/* 
- Name: 2942. Find Words Containing Character
- Description: Return an array of indices representing the
words that contain the character x.
- My line of thought: Pretty simple, just walk through the array of words
and check if the character x is present in each word.
*/

function findWordsContaining(words, x) {
    let indexes = [];

    for(let i = 0; i < words.length; i++) {
        if (words[i].indexOf(x) != -1) {
            indexes.push(i);
        }
    }

    return indexes;
}