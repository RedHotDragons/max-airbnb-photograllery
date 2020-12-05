const faker = require('faker');
const fs = require('fs');

const writeUsers = fs.createWriteStream('listings.csv');
writeUsers.write('id,photo1,photo2,photo3,photo4,photo5,photo6\n', 'utf8');

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
      let photo1 ='https://loremflickr.com/320/240/big,' + housingOptions[index];
      let photo2 ='https://loremflickr.com/320/240/small,' + housingOptions[index];
      let photo3 ='https://loremflickr.com/320/240/light,' + housingOptions[index];
      let photo4 ='https://loremflickr.com/320/240/dark,' + housingOptions[index];
      let photo5 ='https://loremflickr.com/320/240/wide,' + housingOptions[index];
      let photo6 ='https://loremflickr.com/320/240/narrow' + housingOptions[index];
      const data = `${id},${photo1},${photo2},${photo3},${photo4},${photo5},${photo6}\n`;
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

// ongoimport --db airbnb --collection listings --type csv --headerline --ignoreBlanks --file ./listings.csv
//