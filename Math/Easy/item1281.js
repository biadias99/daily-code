/* 
- Name: 1281. Substract the Product and Sum of Digits of an Integer
- Description: Given an integer number n, return the difference between the product of its digits and the sum of its digits.
- My line of thought: Convert the number to a string, then iterate through each character,
calculating the product and sum of the digits. Finally, return the difference.
- Time complexity: O(n)
- Space complexity: O(n)
*/

function subtractProductAndSum(n) {
    let string = n.toString();
    let product = +string[0];
    let sum = +string[0];

    for (let i = 1; i < string.length; i++) {
        product *= +string[i];
        sum += +string[i];
    }

    return product - sum;
};