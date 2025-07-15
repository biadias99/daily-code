/* 
- Name: 1350. Find Students With Invalid Departments
- Description: Write an SQL query to find the id and the name of all students who are enrolled in
departments that no longer exists.
- My line of thought: Just need to find students whose department_id does not match any
existing department id.
*/

SELECT
    s.id, s.name
FROM
    students s
LEFT JOIN
    departments d
ON
    s.department_id = d.id
WHERE
    d.id IS NULL;