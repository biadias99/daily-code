/* 
- Name: 3220. Odd and Even Transactions
- Description: Write a solution to find the sum of amounts for odd and even transactions for each day.
If there are no odd or even transactions for a specific date, display as 0.
- My line of thought: Select transaction_date and calculate the sum of amounts for odd and even transactions using conditional aggregation.
*/

SELECT
    transaction_date,
    SUM(CASE WHEN amount % 2 <> 0 THEN amount ELSE 0 END) AS odd_sum,
    SUM(CASE WHEN amount % 2 = 0 THEN amount ELSE 0 END) AS even_sum
FROM
    transactions
GROUP BY
    transaction_date
ORDER BY
    transaction_date