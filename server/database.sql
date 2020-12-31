CREATE DATABASE toflu;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

ALTER TABLE todo
ADD COLUMN due_date date,
ADD COLUMN recipient VARCHAR(30);