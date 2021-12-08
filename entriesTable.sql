DROP TABLE entries;
CREATE TABLE entry (
    id SERIAL NOT NULL,  
    url VARCHAR,
    user_id INT REFERENCES users,
    entry_password VARCHAR
);

INSERT INTO entry (id, url, user_id, entry_password)
VALUES (1,
    'www.google.com',
    1,
    'Password123'
  ),