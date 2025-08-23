/* 
- Name: 1527. Patients With a Condition
- Description: Write a solution to find the patient_id, patient_name, and conditions of the patients
who have Type I Diabetes. Type I Diabetes always starts with DIAB1 prefix.
- My line of thought: Just need to filter the records where conditions contain DIAB1 prefix.
*/

SELECT 
    *
FROM
    patients
WHERE
    conditions LIKE 'DIAB1%' OR conditions LIKE '% DIAB1%' ;