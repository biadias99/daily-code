/* 
- Name: 3465. Find Products with Valid Serial Numbers
- Description: Write a solution to find all products whose description contains a valid serial number pattern. 
- My line of thought: Select product IDs, names, and descriptions where the description matches a specific pattern 
indicating a valid serial number format.
*/

SELECT 
    product_id,
    product_name,
    description
FROM 
    products
WHERE 
    REGEXP_LIKE(description,'\\bSN[0-9]{4}-[0-9]{4}\\b', 'c')
ORDER BY 
    product_id ASC
