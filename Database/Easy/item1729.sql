/* 
- Name: 1729. Find Followers Count
- Description: Write a solution that will, for each user, return the number of followers.
- My line of thought: Select the user_id from the followers table and count the number of
followers for each user.
*/

SELECT
    user_id,
    COUNT(*) as followers_count
FROM 
    followers
GROUP BY
    user_id
ORDER BY
    user_id