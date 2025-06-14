/* 
- Name: 1757. Recyclable and Low Fat Products
- Description: Write a solution to find the ids of products that are both low fat and recyclable.
- My line of thought: Just need to filter the products table for low_fats and recyclable columns.
*/

SELECT
    product_id
FROM
    products
WHERE
    low_fats = 'Y' 
    AND recyclable = 'Y'