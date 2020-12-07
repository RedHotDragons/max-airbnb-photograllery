const faker = require('faker');
const fs = require('fs');

const writeUsers = fs.createWriteStream('mongoListings.csv');
writeUsers.write('id,title,averageStars,reviewCount,superhost,city,state,country,homeType,host,guests,bedrooms,beds,baths,photos\n', 'utf8');

function generatePhotoArray () {
  var photoArr = [];
  var numberOfPhotos = Math.floor(Math.random() * 10) + 5;
  for (var i = 0; i < numberOfPhotos; i++) {
    var photoId = Math.floor(Math.random() * 1000);
    photoArr.push(photoId);
  }
  console.log(photoArr);
  return photoArr;
}

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 5;
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

      let photos = generatePhotoArray();
      // let photo1 ='https://loremflickr.com/320/240/big,' + housingOptions[index];
      // let photo2 ='https://loremflickr.com/320/240/small,' + housingOptions[index];
      // let photo3 ='https://loremflickr.com/320/240/light,' + housingOptions[index];
      // let photo4 ='https://loremflickr.com/320/240/dark,' + housingOptions[index];
      // let photo5 ='https://loremflickr.com/320/240/wide,' + housingOptions[index];
      // let photo6 ='https://loremflickr.com/320/240/narrow' + housingOptions[index];
      const data = `${id},${title},${averageStars},${reviewCount},${superhost},${city},${state},${country},${homeType},${host},${guests},${bedrooms},${beds},${baths},"{${photos}}"\n`;
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
// node ./Database/mongoSeedingListings.js

//IMPORT CSV INTO MONGO
// mongoimport --db airbnb2 --collection listings --type csv --headerline --ignoreBlanks --file ./mongoListings.csv