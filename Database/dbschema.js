const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/airbnb',{useNewUrlParser: true});

mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', function () {
  console.log('error with connection');
});
db.once('open', function() {
  console.log('connection formed');
});

var listing1schema = new mongoose.Schema({
  name:String,
  photo1:String,
  photo2:String,
  photo3:String,
  photo4:String,
  photo5:String,
  photo6:String
});

var listing2schema = new mongoose.Schema({
  name:String,
  photo1:String,
  photo2:String,
  photo3:String,

});

var listing3schema = new mongoose.Schema({
  name:String,
  photo1:String,
  photo2:String,
  photo3:String,
  photo4:String,
  photo5:String,
  photo6:String,
  photo7:String,
  photo8:String
});

var Sonja = mongoose.model('Listing', listing1schema);



module.exports.Sonja = Sonja;









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

// delete me