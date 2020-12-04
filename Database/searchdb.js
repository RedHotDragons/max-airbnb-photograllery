const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/airbnb',{useNewUrlParser: true});

const Listing = require('./dbschema.js');

console.log('here');

var searchdb = function (callback) {

  // console.log('here');
  Listing.find({name: 'Sonja'}, (err,rows) => {
    callback(err,rows);

  });
};


module.exports.searchdb = searchdb;