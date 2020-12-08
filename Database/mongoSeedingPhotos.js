const faker = require('faker');
const fs = require('fs');

const writeUsers = fs.createWriteStream('mongoPhotos.csv');
writeUsers.write('id,url,listing_id\n', 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 100000000;
  let id = 0;
  let housingOptions = ['treehouse', 'igloo', 'castle', 'hut', 'shack', 'bungalow', 'highrise'];
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      let index = Math.floor((housingOptions.length * Math.random()));
      let url = "https://loremflickr.com/320/240/" + housingOptions[index];
      let listing_id = Math.floor((Math.random() * 100))
      const data = `${id},${url},${listing_id}\n`;
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
// node ./Database/mongoSeedingPhotos.js

//IMPORT CSV INTO MONGO
// mongoimport --db airbnb2 --collection photos --type csv --headerline --ignoreBlanks --file ./mongoPhotos.csv