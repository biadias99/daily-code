/* 
- Name: 2356. Number of Unique Subjects Taught by Each Teacher
- Description: Write a solution to calculate the number of unique subjects each teacher teaches in the university.
- My line of thought: Just need to count distinct subject IDs for each teacher ID in the teacher table.
*/

SELECT
    teacher_id,
    COUNT(DISTINCT subject_id) as cnt
FROM
    teacher
GROUP BY 
    teacher_id
