/* 
- Name: 1084. Sales Analysis III
- Description: Write a solution to report the products that were only sold in the first quarter of 2019.
That is, between 2019-01-01 and 2019-03-31 inclusive.
- My line of thought: Select products that have sales only within the specified date range.
*/

SELECT
    p.product_id,
    p.product_name
FROM
    sales s
INNER JOIN
    product p
ON
    s.product_id = p.product_id
GROUP BY
    p.product_id,
    p.product_name 
HAVING
    MIN(sale_date) >= '2019-01-01' AND
    max(sale_date) <= '2019-03-31'