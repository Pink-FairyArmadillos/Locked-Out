DROP TABLE users;
CREATE TABLE users (
    _id SERIAL NOT NULL,  
    username VARCHAR,
    password VARCHAR,
);

INSERT INTO users (url, username, password)
VALUES (
    'www.google.com',
    1,
    'Password123'
  ),