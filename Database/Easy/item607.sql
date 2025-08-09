/* 
- Name: 607. Sales Person 
- Description: Write a solution to find the names of all the salespersons who did not have any orders related to the company
with the name "RED".
- My line of thought: Select salespersons whose sales_id is not in the list of sales_ids that have orders related to the company "RED".
*/

SELECT
    sp.name
FROM
    salesPerson sp
WHERE
    sp.sales_id NOT IN (
        SELECT
            o.sales_id
        FROM
            orders o
        INNER JOIN 
            company c
        ON
            o.com_id = c.com_id
        WHERE
            c.name = 'RED'
    )