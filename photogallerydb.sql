DROP DATABASE IF EXISTS photo_gallery;

CREATE DATABASE photo_gallery;

USE photo_gallery;


CREATE TABLE listings (
  name VARCHAR(25) PRIMARY KEY,
  photos INT
);

INSERT INTO listings (name, photos) values ('SonjaHouse/', '6');