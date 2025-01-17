SELECT name as Customers
FROM Customers
WHERE id NOT in (
        select customerId from Orders
)