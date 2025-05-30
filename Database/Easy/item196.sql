/* 
- Name: 196. Delete Duplicate Emails
- Description: Write a solution to delete all duplicate emails,
keeping only one unique email with the smallest id.
- My line of thought: Find the minimum id for each email and
delete all other ids that are not in that list.
*/

DELETE FROM Person
WHERE id NOT IN (
    SELECT * FROM (
        SELECT MIN(id)
        FROM Person
        GROUP BY email
    ) AS temp
)
