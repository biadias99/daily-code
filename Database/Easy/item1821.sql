/* 
- Name: 1821. Find Customers with Positive Revenue this Year
- Description: Write an SQL query to report the customers with postive revenue in the year 2021.
- My line of thought: Select customer IDs from the customers table where the year is 2021 and
revenue is greater than zero.
*/

SELECT
    customer_id
FROM
    customers 
WHERE
    year = 2021 AND
    revenue > 0