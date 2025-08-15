/* 
- Name: 3570. Find Books With No Available Copies
- Description: Write a solution to find all books that are currently borrowed (not returned) and have zero copies available in the library.
- My line of thought: Select books that have been borrowed but not returned, and ensure the count of current borrowers matches the total 
copies available.
*/

SELECT 
    lb.book_id,
    lb.title,
    lb.author,
    lb.genre,
    lb.publication_year,
    COUNT(br.record_id) AS current_borrowers
FROM
    library_books lb
JOIN borrowing_records br
ON lb.book_id = br.book_id
WHERE br.return_date IS NULL
GROUP BY 
    lb.book_id,
    lb.title,
    lb.author,
    lb.genre,
    lb.publication_year,
    lb.total_copies
HAVING COUNT(br.record_id) = lb.total_copies
ORDER BY 
    current_borrowers DESC,
    lb.title ASC
