/* 
- Name: 1327. List the Products Ordered in a Period
- Description: Write a solution to get the names of products that have at least 100 units
ordered in February 2020 and their amount.
- My line of thought: We need to join the products and orders tables, filter by the order date,
and then group by product to sum the units ordered.
*/

SELECT 
    p.product_name,
    SUM(o.unit) AS unit
FROM
    products p
INNER JOIN
    orders o
ON
    p.product_id = o.product_id
WHERE 
    o.order_date LIKE '2020-02%'
GROUP BY 
    p.product_id
HAVING 
    SUM(o.unit) >= 100;