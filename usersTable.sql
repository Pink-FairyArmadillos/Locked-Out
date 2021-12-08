DROP TABLE users;
CREATE TABLE users (
    _id SERIAL NOT NULL PRIMARY KEY,  
    username VARCHAR,
    passcode VARCHAR,
    session_id uuid
);

INSERT INTO users (username, passcode)
VALUES (
    'test',
    'Password123'
  );
