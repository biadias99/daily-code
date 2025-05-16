/* 
- Name: 584. Find Customer Referee
- Description: Find the names of the customer that are not referred by the customer with id = 2.
- My line of thought: Just select the ones that has referee_id different of two and
referee_id is null.
*/

SELECT 
    name
FROM
    customer
WHERE
    referee_id != 2 OR referee_id IS NULL