/* 
- Name: 1407. Top Travellers
- Description: Write a solution to report the distance traveled by each user.
- My line of thought: Select user name and sum of distances from rides,
group by user, and order by distance in descending order.
*/

SELECT
    u.name, 
    CASE
        WHEN r.distance IS NULL THEN 0
        ELSE SUM(r.distance)
    END AS travelled_distance
FROM
    Users u
LEFT JOIN
    Rides r
ON
    u.id = r.user_id
GROUP BY 
    u.id
ORDER BY
    travelled_distance DESC,
    u.name ASC
