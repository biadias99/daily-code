/* 
- Name: 121. Best Time to Buy and Sell Stock
- Description: Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
- My line of thought: To find the maximum profit, I need to keep track of the minimum price seen so far and calculate the profit at each step.
*/

function maxProfit(prices) {
    if (prices.length === 0) return 0;

    let min = prices[0];
    let max = prices[0];
    let maxProfit = 0;
    let buy = true;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
            max = prices[i];
            buy = true;
        }

        if (buy && prices[i] > max) {
            max = prices[i];
            const profit = max - min;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit;
}
