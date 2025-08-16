/* 
- Name: 1280. Students and Examinations
- Description: Write a solution to find the number of times each student attended each exam.
- My line of thought: Select students and their subjects, counting the number of examinations attended for each subject.
*/

SELECT
    s.student_id,
    s.student_name,
    sb.subject_name,
    COUNT(e.subject_name) AS attended_exams
FROM
    students s
JOIN
    subjects sb
LEFT JOIN
    examinations e
ON
    s.student_id = e.student_id
AND
    sb.subject_name = e.subject_name
GROUP BY
    s.student_id, sb.subject_name
ORDER BY
    student_id ASC,
    subject_name ASC