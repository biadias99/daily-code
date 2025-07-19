/* 
- Name: 586. Customer Placing the Largest Number of Orders
- Description: Write a solution to find the customer_number for the customer who has
placed the largest number of orders.
- My line of thought: Select the customer_number from the orders table, group by it,
and order by the count of orders in descending order, limiting the result to 1.
*/

SELECT
    customer_number
FROM
    orders
GROUP BY 
    customer_number
ORDER BY 
    COUNT(*) DESC LIMIT 1