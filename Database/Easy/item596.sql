/* 
- Name: 596. Classes More Than 5 Students
- Description: Write a solution to find all the classes that have at least five students.
- My line of thought: Group by the name of the class and then simply count the number
of students in each class.
*/

SELECT
    c.class
FROM
    courses c
GROUP BY
    c.class
HAVING
    COUNT(c.student) >= 5
