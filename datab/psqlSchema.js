CREATE SCHEMA IF NOT EXISTS listingsPhotos;

DROP TABLE IF EXISTS listings;

DROP TABLE IF EXISTS photos;

CREATE TABLE listings (
  "id" INT primary key GENERATED ALWAYS AS IDENTITY,
  "title" VARCHAR(64),
  "average_stars" REAL,
  "review_count" SMALLINT,
  "superhost" BOOLEAN,
  "city" VARCHAR(64),
  "state" VARCHAR(64),
  "country" VARCHAR(64),
  "home_type" VARCHAR(64),
  "host" VARCHAR(64),
  "guests" SMALLINT,
  "bedrooms" SMALLINT,
  "beds" SMALLINT,
  "baths" REAL
);

CREATE TABLE photos (
  id INT primary key,
  url VARCHAR(300),
  listingId INT,
  CONSTRAINT fk_listingId
    FOREIGN KEY(listingId)
      REFERENCES listings(id)
      ON DELETE CASCADE
  );