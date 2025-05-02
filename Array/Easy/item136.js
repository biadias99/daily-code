/* 
- Name: 136. Single Number
- Description: Given a non-empty array of integers nums, every element appears twice except for one.
Find that single one.
- My line of thought: Since the number is unique, I needed to find a way to find the different number. The XOR operator
is the easiest way to do this. The XOR operator compares two numbers and returns the different one.
- Time complexity: O(n)
- Space complexity:  O(1)
- Runtime beats: 100%
- Memory beats:  96.54%
*/

function singleNumber(nums) {
    // Set the number 
    let result = 0;

    // Operador XOR
    // XOR compara de dois em dois numeros e sempre vai me retornar o diferente no final
    for(var i = 0; i < nums.length; i++) {
        result = result ^ nums[i];
    }

    return result;
}