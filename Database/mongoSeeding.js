const mongoose = require('mongoose');
const Listing = require('./dbschema.js')


var seed = () => {
  var docsToInsert = [];
  var documentGenerator = (id) => {
    return {
      listingId: id,
      name:'Sonja',
      photo1:'https://loremflickr.com/320/240/treehouse,tree',
      photo2:'https://loremflickr.com/320/240/treehouse,forest',
      photo3:'https://loremflickr.com/320/240/treehouse,green',
      photo4:'https://loremflickr.com/320/240/treehouse,brown',
      photo5:'https://loremflickr.com/320/240/treehouse,light',
      photo6:'hhttps://loremflickr.com/320/240/treehouse,dark',
    }
  }
  for (var i = 0; i < 1000000; i++) {
    docToInsert = documentGenerator(i);
    docsToInsert.push(docToInsert);
    if (i % 10000 === 0) {
      Listing.insertMany(docsToInsert, (err, data) => {
        if (err) {
          console.log(err);
          return;
        } else {
          console.log('Data seeded successfully');
          // mongoose.connection.close();
        }
      })
      docsToInsert = [];
    }
  }
  // Listing.insertMany(docsToInsert, (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   } else {
  //     console.log('Data seeded successfully');
  //     // mongoose.connection.close();
  //   }
  // })
  console.log('Data seeded successfully');
  // mongoose.connection.close();
}

seed();

// SEEDING SCRIPT
// node ./Database/mongoSeeding.js

// EXPORT TO CSC
// mongoexport --collection=listings --db=airbnb --out=listings.csv



// const mongoose = require('mongoose');
// const Listing = require('./dbschema.js')



// const listingOne = new Listing({
//   listingId: 3,
//   name:'Sonja',
//   photo1:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo1.jpg',
//   photo2:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo2.jpg',
//   photo3:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo3.jpg',
//   photo4:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo4.jpg',
//   photo5:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo5.jpg',
//   photo6:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo6.jpg',
// })

// listingOne.save();

// for (var i = 0; i <= 1000; i++) {
//   docToInsert = documentGenerator(i);
//   docsToInsert.push(docToInsert);
//   if (i % 100 === 0) {
//     Listing.insertMany(docsToInsert)
//     docsToInsert = [];
//   }
//   if (i === 1000) {
//     console.log('Data seeded successfully');
//     mongoose.connection.close();
//   }
// }