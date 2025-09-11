/* 
- Name: 1816. Truncate Sentence
- Description: You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it
contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.
- My line of thought: Use split to break the sentence into words, slice to get the first k words,
and join to put it back together.
- Time complexity: O(n)
- Space complexity: O(n)
*/

function truncateSentence (s, k) {
    return s.split(" ").slice(0, k).join(" ");
}