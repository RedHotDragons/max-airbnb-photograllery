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

const photoSchema = new mongoose.Schema({
  id: Number,
  url: String,
  listing_id: Number
})

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
  photos: {
    "type" : "array",
    "items": {
      "type": "number"
    }
  }
});

var Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;