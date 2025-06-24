/* 
- Name: 1672. Richest Customer Wealth
- Description: You are given an m x n integer grid accounts where accounts[i][j] is the
amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest
customer has.
- My line of thought:  I can iterate through the accounts array, summing up each customer's
wealth, and then return the maximum wealth found.
- Time complexity: O(m*n)) 
- Space complexity: O(m)
*/

function maximumWealth(accounts) {
    let wealths = [];

    for (let i = 0; i < accounts.length; i++) {
        wealths[i] = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            wealths[i] += accounts[i][j]; 
        }
    }  

    return Math.max(...wealths);
};