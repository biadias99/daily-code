/* 
- Name: 2635. Apply Transformations to Each Element in Array
- Description: Given an integer array arr and a mapping function fn, return a new array
with a transformation applied to each element.
- My line of thought: Just iterate through the array, apply the function to each element,
and return the new array.
- Time complexity: O(n)
- Space complexity:  O(1)
*/

var map = function(arr, fn) {
    let returnedArray = [];
    
    for(let i = 0; i < arr.length; i++) {
        returnedArray.push(fn(arr[i], i));
    }

    return returnedArray
};