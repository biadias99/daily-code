/* 
- Name: 2011. Final Value of Variable After Performing Operations
- Description: Given a non-empty array of integers nums, every element appears twice except for one.
Find that single one.
- My line of thought: Given an array of strings operations containing a list of operations, return the
final value of X after performing all the operations.
- Time complexity: O(n)
- Space complexity:  O(1)
*/

function finalValueAfterOperations(operations) {
    let sum = 0;

    for(let x of operations) {
        if(x.includes("++")) {
            sum++;
        } else {
            sum--;
        }
    }

    return sum;
}