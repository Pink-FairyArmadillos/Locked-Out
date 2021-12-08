DROP TABLE users;
CREATE TABLE users (
    _id SERIAL NOT NULL PRIMARY KEY,  
    username VARCHAR,
    password VARCHAR
);

INSERT INTO users (username, password)
VALUES (
    'test',
    'Password123'
  );
