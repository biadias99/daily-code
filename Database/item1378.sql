/* 
- Name: 1378. Replace Employee ID With The Unique Identifier
- Description: Write a solution to show the unique ID of each user, If a user does not have a unique ID
replace just show null.
- My line of thought: Just do a simple left join between the Employees and EmployeeUNI tables.
*/

SELECT 
    u.unique_id,
    e.name
FROM 
    Employees e 
LEFT JOIN
    EmployeeUNI u
ON
    e.id = u.id