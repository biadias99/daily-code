/* 
- Name: 184. Department Highest Salary
- Description: Write a solution to find employees who have the highest
salary in each of the departments.
- My line of thought: Combine two tables with join to get the columns I need.
Get a subquery to find the max salary in each department. Then use that to filter
the employees who have that salary.
*/

SELECT
    d.name as department,
    e.name as employee,
    e.salary as salary
FROM
    employee e
JOIN
    department d
ON 
    e.departmentId = d.id
WHERE
    e.salary IN
    (
        SELECT
            MAX(salary)
        FROM
            employee
        WHERE departmentId = e.departmentId
    )