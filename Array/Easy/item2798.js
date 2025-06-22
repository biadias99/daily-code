/* 
- Name: 2798. Number of Employees Who Met the Target
- Description: You are given a 0-indexed array of non-negative integers hours of length n and a
non-negative integer target.
Return the integer denoting the number of employees who worked at least target hours.
- My line of thought: 
- Time complexity: O(n)
- Space complexity: O(1)
*/

function numberOfEmployeesWhoMetTarget(hours, target) {
    let count = 0;

    for (let i = 0; i < hours.length; i++) {
        if (hours[i] >= target) {
            count++;
        }
    }

    return count;
};