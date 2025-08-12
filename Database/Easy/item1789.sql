/* 
- Name: 1789. Primary Department For Each Employee
- Description: Employees can belong to multiple departments. When the employee joins other departments, they need to
decide which department is their primary department. Note that when an employee belongs to only one department, their primary
column is 'N'.
- My line of thought: Union the employees who have a primary department marked as 'Y' with those who only belong to one department.
*/

SELECT
    employee_id,
    department_id
FROM
    employee
WHERE   
    primary_flag = 'Y'

UNION

SELECT
    employee_id,
    department_id
FROM
    employee
GROUP BY
    employee_id
HAVING COUNT(employee_id) = 1

ORDER BY
    employee_id
