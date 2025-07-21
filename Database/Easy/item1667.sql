/* 
- Name: 1667. Fix Names in a Table
- Description: Write a solution to fix the names so that only the first character is uppercase
and the rest are lowercase.
- My line of thought: Just use the CONCAT function to combine the uppercase first letter
and the lowercase rest of the name, using SUBSTR to split the string.
*/

SELECT
    user_id,
    CONCAT(UPPER(SUBSTR(name, 1, 1)), LOWER (SUBSTR(name, 2))) AS name
FROM
    users
ORDER BY
    user_id 