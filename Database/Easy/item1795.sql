/* 
- Name: 1795. Rearrange Products Table
- Description: Write a solution to rearrange the Products table so that each row has (product_id, store, price).
If a product is not available in a store, do not include a row with that product_id and store combination in the result table.
- My line of thought: Select product_id and store with their respective prices, using UNION to combine results from different stores.
*/

SELECT 
    product_id,
    'store1' AS store,
    store1 AS price
FROM
    Products
WHERE
    store1 IS NOT NULL

UNION

SELECT
    product_id,
    'store2' AS store,
    store2 AS price
FROM
    Products
WHERE
    store2 IS NOT NULL

UNION

SELECT product_id,
    'store3' AS store,
    store3 AS price
FROM Products
WHERE store3 IS NOT NULL

ORDER BY product_id, store;