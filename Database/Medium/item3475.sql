/* 
- Name: 3475. DNA Pattern Recognition
- Description: Biologists are studying basic patterns in DNA sequences. Write a solution to identify sample_id with the following patterns:
Sequences that start with ATG (a common start codon)
Sequences that end with either TAA, TAG, or TGA (stop codons)
Sequences containing the motif ATAT (a simple repeated pattern)
Sequences that have at least 3 consecutive G (like GGG or GGGG)
- My line of thought: We can use EXISTS with subqueries to check for the presence of these patterns in the dna_sequence column.
*/

SELECT
    s.sample_id,
    s.dna_sequence,
    s.species,
    CASE 
        WHEN EXISTS (
            SELECT 1 
            FROM Samples 
            WHERE sample_id = s.sample_id
            AND dna_sequence LIKE 'ATG%'
        ) THEN 1
        ELSE 0
    END AS has_start,
    CASE 
        WHEN EXISTS (
            SELECT 1 
            FROM Samples 
            WHERE sample_id = s.sample_id
            AND (dna_sequence LIKE '%TAA'
            OR dna_sequence LIKE '%TAG'
            OR dna_sequence LIKE '%TGA')
        ) THEN 1
        ELSE 0
    END AS has_stop,
    CASE 
        WHEN EXISTS (
            SELECT 1 
            FROM Samples 
            WHERE sample_id = s.sample_id
            AND dna_sequence LIKE '%ATAT%'
        ) THEN 1
        ELSE 0
    END AS has_atat,
    CASE 
        WHEN EXISTS (
            SELECT 1 
            FROM Samples 
            WHERE sample_id = s.sample_id
            AND dna_sequence LIKE '%GGG%'
        ) THEN 1
        ELSE 0
    END AS has_ggg
FROM
    Samples s
