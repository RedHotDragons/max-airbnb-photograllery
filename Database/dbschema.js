const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/airbnb',{useNewUrlParser: true});

// mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', function () {
  console.log('error with connection');
});
db.once('open', function() {
  console.log('connection formed!!');
});

const listingSchema = new mongoose.Schema({
  name:String,
  photo1:String,
  photo2:String,
  photo3:String,
  photo4:String,
  photo5:String,
  photo6:String
});

var Listing = mongoose.model('Listing', listingSchema);

const listingOne = new Listing({
  name:'Sonja',
  photo1:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo1.jpg',
  photo2:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo2.jpg',
  photo3:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo3.jpg',
  photo4:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo4.jpg',
  photo5:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo5.jpg',
  photo6:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo6.jpg'
})

listingOne.save();



module.exports.Sonja = Listing;









// var Sonja = new Sonja ({
//   name:'Sonja',
//   photo1:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo1.jpg',
//   photo2:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo2.jpg',
//   photo3:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo3.jpg',
//   photo4:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo4.jpg',
//   photo5:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo5.jpg',
//   photo6:'https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/SonjaHouse/photo6.jpg'
// })


// Sonja.save();

// node ./Database/dbschema.js

// install mongo
// then rerun node command