/* 
- Name: 2894. Divisible and Non-divisible Sums Difference
- Description: Define two sums: one for numbers from 1 to n that are not divisible by m, and another
for numbers that are divisible by m. Return the difference between these two sums.
Return the integer num1 - num2.
- My line of thought: Just iterate through numbers from 1 to n, check if they are divisible by m,
and add them to the respective sums. Finally, return the difference between the two sums.
- Time complexity: O(n)
- Space complexity: O(1)
*/

function differenceOfSums(n, m) {
    let num1 = 0;
    let num2 = 0;

    for (let i = 1; i <= n; i++) {
        if (i % m != 0) {
            num1 += i;
        } else {
            num2 += i;
        }
    }

    return num1 - num2;
};