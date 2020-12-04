const mongoose = require('mongoose');
const Listing = require('./dbschema.js')



const listingOne = new Listing({
  listingId: 3,
  name:'Sonja',
  photo1:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo1.jpg',
  photo2:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo2.jpg',
  photo3:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo3.jpg',
  photo4:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo4.jpg',
  photo5:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo5.jpg',
  photo6:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo6.jpg',
  // photoArr: [  photo1:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo1.jpg',
  //   photo2:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo2.jpg',
  //   photo3:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo3.jpg',
  //   photo4:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo4.jpg',
  //   photo5:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo5.jpg',
  //   photo6:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo6.jpg'
  // ]
})

listingOne.save();

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