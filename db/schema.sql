DROP DATABASE IF EXISTS lets_travel;

CREATE DATABASE lets_travel;

\c lets_travel

CREATE TABLE IF NOT EXISTS places(
  place_id serial PRIMARY KEY,
  city TEXT,
  country TEXT,
  description TEXT,
  lat NUMERIC,
  long NUMERIC,
  airport TEXT
);

CREATE TABLE IF NOT EXISTS images(
  image_id INT PRIMARY KEY,
  place_id INT REFERENCES places (place_id),
  url TEXT
);

CREATE TABLE IF NOT EXISTS current(
  current_id SERIAL PRIMARY KEY,
  place_id INT REFERENCES places (place_id),
  UNIQUE (place_id)
);

COPY places(place_id, city, country, lat, long, description, airport)
FROM '/Users/ag/HR/Lets-Travel/db/files/places.csv'
DELIMITER ','
CSV HEADER;

COPY images(image_id, place_id, url)
FROM '/Users/ag/HR/Lets-Travel/db/files/images.csv'
DELIMITER ','
CSV HEADER;

CREATE INDEX place_index ON images (place_id ASC);