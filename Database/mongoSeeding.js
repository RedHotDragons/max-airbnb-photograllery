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
      photo3:'https://loremflickr.com/320/240/treehouse,high',
      photo4:'https://loremflickr.com/320/240/treehouse,low',
      photo5:'https://loremflickr.com/320/240/treehouse,empty',
      photo6:'hhttps://loremflickr.com/320/240/treehouse,full',
    }
  }
  for (var i = 0; i < 3; i++) {
    docToInsert = documentGenerator(i);
    docsToInsert.push(docToInsert);
  }
  Listing.insertMany(docsToInsert, (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log('Data seeded successfully');
      mongoose.connection.close();
    }
  })
}

seed();


// const listingOne = new Listing({
//   listingId: 3,
//   name:'Sonja',
//   photo1:'https://loremflickr.com/320/240/treehouse,tree',
//   photo2:'https://loremflickr.com/320/240/treehouse,forest',
//   photo3:'https://loremflickr.com/320/240/treehouse,high',
//   photo4:'https://loremflickr.com/320/240/treehouse,low',
//   photo5:'https://loremflickr.com/320/240/treehouse,empty',
//   photo6:'hhttps://loremflickr.com/320/240/treehouse,full',
// })

// listingOne.save();

// node ./Database/mongoSeeding.js



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