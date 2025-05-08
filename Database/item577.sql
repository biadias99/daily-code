/* 
- Name: 577. Employee Bonus
- Description: Write a solution to report the name and bonus amount of
each employee with a bonus less than 1000.
- My line of thought: Combine two tables with left join to get the columns I need.
Then use a where clause to filter the results to only those with a bonus less than 1000 
or no bonus at all.
*/

SELECT
    e.name,
    b.bonus
FROM
    employee e
LEFT JOIN
    bonus b
ON
    e.empId = b.empId
WHERE
    b.bonus < 1000 || b.bonus IS NULL