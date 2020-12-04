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
  listingId:Number,
  name:String,
  photo1:String,
  photo2:String,
  photo3:String,
  photo4:String,
  photo5:String,
  photo6:String
  // photoArr: [
  //   String,
  //   String,
  //   String,
  //   String,
  //   String,
  //   String
  // ]
});

var Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;