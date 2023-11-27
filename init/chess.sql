CREATE TABLE Chess (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100),
    win INT,
    lose INT
);

INSERT INTO Chess (username, win, lose)
VALUES
('Line', 9, 4),
('Lucas', 4, 9),
('Gribouille', 10, 5);