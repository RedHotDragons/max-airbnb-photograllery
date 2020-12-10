const faker = require('faker');
const fs = require('fs');

const writeUsers = fs.createWriteStream('mongoListings.csv');
writeUsers.write('id,title,averageStars,reviewCount,superhost,city,state,country,homeType,host,guests,bedrooms,beds,baths,photo1,photo2,photo3,photo4,photo5,photo6,photo7,photo8,photo9,photo10,photo11,photo12,photo13,photo14,photo15,photo16,photo17,photo18,photo19,photo20\n', 'utf8');

// function generatePhotoArray () {
//   var photoArr = [];
//   var numberOfPhotos = Math.floor(Math.random() * 10) + 5;
//   for (var i = 0; i < numberOfPhotos; i++) {
//     var photoId = Math.floor(Math.random() * 1000);
//     photoArr.push(photoId);
//   }
//   console.log(photoArr);
//   return photoArr;
// }

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 100;
  let id = 0;
  let housingOptions = ['treehouse', 'igloo', 'castle', 'hut', 'shack', 'bungalow', 'highrise'];
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      let index = Math.floor((housingOptions.length * Math.random()));
      let numPhotos = 5 + Math.ceil((15 * Math.random()));

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
      let photo1 = 1 <= numPhotos ? 'https://loremflickr.com/320/240/' + housingOptions[index] : '';
      let photo2 = 2 <= numPhotos ? 'https://loremflickr.com/330/240/' + housingOptions[index] : '';
      let photo3 = 3 <= numPhotos ? 'https://loremflickr.com/340/240/' + housingOptions[index] : '';
      let photo4 = 4 <= numPhotos ? 'https://loremflickr.com/350/240/' + housingOptions[index] : '';
      let photo5 = 5 <= numPhotos ? 'https://loremflickr.com/360/240/' + housingOptions[index] : '';
      let photo6 = 6 <= numPhotos ? 'https://loremflickr.com/370/240/' + housingOptions[index] : '';
      let photo7 = 7 <= numPhotos ? 'https://loremflickr.com/380/240/' + housingOptions[index] : '';
      let photo8 = 8 <= numPhotos ? 'https://loremflickr.com/390/240/' + housingOptions[index] : '';
      let photo9 = 9 <= numPhotos ? 'https://loremflickr.com/400/240/' + housingOptions[index] : '';
      let photo10 = 10 <= numPhotos ? 'https://loremflickr.com/410/240/' + housingOptions[index] : '';
      let photo11 = 11 <= numPhotos ? 'https://loremflickr.com/420/240/' + housingOptions[index] : '';
      let photo12 = 12 <= numPhotos ? 'https://loremflickr.com/430/240/' + housingOptions[index] : '';
      let photo13 = 13 <= numPhotos ? 'https://loremflickr.com/440/240/' + housingOptions[index] : '';
      let photo14 = 14 <= numPhotos ? 'https://loremflickr.com/450/240/' + housingOptions[index] : '';
      let photo15 = 15 <= numPhotos ? 'https://loremflickr.com/460/240/' + housingOptions[index] : '';
      let photo16 = 16 <= numPhotos ? 'https://loremflickr.com/470/240/' + housingOptions[index] : '';
      let photo17 = 17 <= numPhotos ? 'https://loremflickr.com/480/240/' + housingOptions[index] : '';
      let photo18 = 18 <= numPhotos ? 'https://loremflickr.com/490/240/' + housingOptions[index] : '';
      let photo19 = 19 <= numPhotos ? 'https://loremflickr.com/500/240/' + housingOptions[index] : '';
      let photo20 = 20 <= numPhotos ? 'https://loremflickr.com/510/240/' + housingOptions[index] : '';
      const data = `${id},${title},${averageStars},${reviewCount},${superhost},${city},${state},${country},${homeType},${host},${guests},${bedrooms},${beds},${baths},${photo1},${photo2},${photo3},${photo4},${photo5},${photo6},${photo7},${photo8},${photo9},${photo10},${photo11},${photo12},${photo13},${photo14},${photo15},${photo16},${photo17},${photo18},${photo19},${photo20}\n`;
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
// mongoimport --db airbnb --collection listings --type csv --headerline --ignoreBlanks --file ./mongoListings.csv