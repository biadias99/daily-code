/* 
- Name: 1484. Group Sold Products by The Date
- Description: Write a solution to find for each date the number of different products sold
and their names.
- My line of thought: Select the sell date, count distinct products sold on that date,
and concatenate the product names, grouping by sell date.
*/

SELECT
    sell_date,
    COUNT(DISTINCT(product)) AS num_sold,
    GROUP_CONCAT(DISTINCT product ORDER BY product SEPARATOR ',') AS products
FROM
    activities
GROUP BY
    sell_date