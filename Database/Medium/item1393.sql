/* 
- Name: 1393. Capital Gain/Loss
- Description: Write a solution to report the Capital gain/loss for each stock.
- My line of thought: Select stock_name and calculate the total capital gain/loss by summing the price based on the operation type.
*/

SELECT stock_name, SUM(
    CASE
        WHEN operation = 'Buy' THEN -price
        ELSE price
    END
) AS capital_gain_loss
FROM
    stocks
GROUP BY
    stock_name