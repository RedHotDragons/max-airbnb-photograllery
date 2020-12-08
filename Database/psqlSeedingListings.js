const faker = require('faker');
const fs = require('fs');

const writeUsers = fs.createWriteStream('psqlListings.csv');
writeUsers.write('id,url,listingId\n', 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  let housingOptions = ['treehouse', 'igloo', 'castle', 'hut', 'shack', 'bungalow', 'highrise'];




  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      let index = Math.floor((housingOptions.length * Math.random()));

      let title = faker.name.lastName();
      let averageStars = faker.random.number({'min': 1, 'max': 5});
      let reviewCount = faker.random.number({'min': 1, 'max': 5});
      let superhost = faker.random.boolean();
      let city = faker.address.city();
      let state = faker.address.state();
      let country = faker.address.county();
      let homeType = housingOptions[index];
      let host = faker.name.firstName();
      let guests = faker.random.number({'min': 1, "max": 20});
      let bedrooms = faker.random.number({'min': 1, 'max': 5});
      let beds = faker.random.number({'min': 1, 'max': 10});
      let baths = faker.random.number({'min': 1, 'max': 10});
      const data = `${id},${title},${averageStars},${reviewCount},${superhost},${city},${state},${country},${homeType},${host},${guests},${bedrooms},${beds},${baths}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
// see if we should continue, or wait
// don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
// had to stop early!
// write some more once it drains
      writer.once('drain', write);
    }
  }
write()
}

writeTenMillionUsers(writeUsers, 'utf-8', () => {
  writeUsers.end();
});

// RUN CSV
// node ./Database/psqlSeedingListings.js

//IMPORT CSV INTO Postgres
// COPY listings(id, title, average_stars, review_count, superhost, city, state, country, home_type, host, guests, bedrooms, beds, baths) FROM '/Users/maxeinhorn/coding/max-airbnb-photograllery/psqlListings.csv' DELIMITER ',' CSV HEADER;