/* 
- Name: 1581. Customer Who Visited But Did Not Make Any Transactions
- Description: Write a solution to find the IDs of the users who visited without
making any transactions and the number of times they made these types of visits.
- My line of thought: Select customer_id from visits, left join transactions on visit_id,
counting visits where there are no corresponding transactions, grouping by customer_id.
*/

SELECT
    customer_id,
    COUNT(v.visit_id) AS count_no_trans
FROM
    visits v
LEFT JOIN
    transactions t
ON 
    v.visit_id = t.visit_id
WHERE
    t.transaction_id IS NULL
GROUP BY
    customer_id
