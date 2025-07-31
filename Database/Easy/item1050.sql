/* 
- Name: 1050. Actors and Directors Who Cooperated At Least Three Times
- Description: Write a solution to find all the pairs (actor_id, director_id) where the actor
has cooperated with the director at least three times.
- My line of thought: Select actor_id and director_id from actordirector, grouping by both
and counting the occurrences, filtering for those with at least three collaborations.
*/

SELECT
    actor_id,
    director_id
FROM 
    actordirector
GROUP BY
    actor_id,
    director_id
HAVING
    COUNT(*) >= 3