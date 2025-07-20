/* 
- Name: 1965. Employees with Missing Information
- Description: Write a solution to report the IDs of all the employees with missing information.
- My line of thought: Apply a union to find employees who are missing from either the employees table
or the salaries table. Not possible to use full outer join in mySQL, so we will use a union of two
left joins.
*/

(
    SELECT 
        e.employee_id
    FROM 
        employees e
    LEFT JOIN
        salaries s
    ON
        e.employee_id = s.employee_id
    WHERE
        s.employee_id IS NULL

    UNION

    SELECT 
        s.employee_id
    FROM 
        salaries s
    LEFT JOIN
        employees e ON s.employee_id = e.employee_id
    WHERE 
        e.employee_id IS NULL
)
ORDER BY employee_id;