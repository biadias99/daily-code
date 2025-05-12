/* 
- Name: 1068. Product Sales Analysis I
- Description: Write a solution to report the product_name, year, and price
for each sale_id in the Sales table.
- My line of thought: Just do a simple join between the Sales and Product tables.
*/

SELECT
    p.product_name,
    s.year,
    s.price
FROM 
    Sales s
INNER JOIN 
    Product p
ON
    s.product_id = p.product_id