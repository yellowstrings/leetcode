SELECT p.firstName, p.lastName, a.city, a.state
FROM Person P Left Join Address A
on P.personId = A.personId