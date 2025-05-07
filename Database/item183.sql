/* 
- Name: 183. Customers Who Never Order
- Description: Write a solution to find all customers who never order anything.
- My line of thought: Get all customers and filter out those who have made orders.
*/

SELECT 
    c.name as customers
FROM
    customers c
WHERE
    c.id NOT IN 
    (
        SELECT
            customerId
        FROM
            orders
    )
