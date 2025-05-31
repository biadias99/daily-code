/* 
- Name: 28. Find The Index of The First Occurrence in a String
- Description: Given two strings needle and haystack, return the index
of the first occurrence of needle in haystack, or -1 if needle is not
part of haystack.
- My line of thought: Just use the indexOf method to find the first occurrence
of the needle in the haystack. If it is not found, return -1.
- Time complexity: O(n*m)
- Space complexity: O(1)
*/

function strStr(haystack, needle) {
    return haystack.indexOf(needle);
};