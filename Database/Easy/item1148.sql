/* 
- Name: 1148. Article Views I
- Description: Write a solution to find all the authors that viewed at least one of their own articles.
- My line of thought: Select distinct author IDs from the views table where the author ID matches the viewer ID.
*/

SELECT DISTINCT
    author_id AS id
FROM
    views
WHERE
    author_id = viewer_id 
ORDER BY
    id