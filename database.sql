CREATE DATABASE toflu;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

ALTER TABLE todo
ADD COLUMN due_date DATE,
ADD COLUMN recipient VARCHAR(30)
ADD COLUMN complete BOOLEAN;


CREATE TABLE research(
    topic_id SERIAL PRIMARY KEY,
    topic VARCHAR(255),
    subj VARCHAR(255),
    project VARCHAR(255)
);

ALTER TABLE research
ADD COLUMN complete BOOLEAN;