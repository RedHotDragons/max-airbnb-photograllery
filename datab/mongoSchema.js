const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://ec2-3-89-109-178.compute-1.amazonaws.com/airbnb',{useNewUrlParser: true});

// mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', function () {
  console.log('error with connection');
});
db.once('open', function() {
  console.log('connection formed!!');
});

const listingSchema = new mongoose.Schema({
  id: Number,
  title: String,
  average_stars: Number,
  review_count: Number,
  superhost: Boolean,
  city: String,
  state: String,
  country: String,
  home_type: String,
  host: String,
  guests: Number,
  bedrooms: Number,
  beds: Number,
  baths: Number,
  photo1: String,
  photo2: String,
  photo3: String,
  photo4: String,
  photo5: String,
  photo6: String,
  photo7: String,
  photo8: String,
  photo9: String,
  photo10: String,
  photo11: String,
  photo12: String,
  photo13: String,
  photo14: String,
  photo15: String,
  photo16: String,
  photo17: String,
  photo18: String,
  photo19: String,
  photo20: String
});

var Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;

// trivial change
