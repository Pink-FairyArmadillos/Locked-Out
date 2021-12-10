DROP TABLE entry;
CREATE TABLE entry (
    id SERIAL NOT NULL,  
    url VARCHAR,
    user_id INT REFERENCES users,
    entry_password VARCHAR
);

INSERT INTO entry (url, user_id, entry_password)
VALUES (
    'www.google.com',
    1,
    'Password123'
  );
