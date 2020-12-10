const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/airbnb',{useNewUrlParser: true});

const Listing = require('./mongoSchema.js');

var searchdb = function (callback) {

  console.log('You have reached the database');
  Listing.find({id: '102'}, (err,rows) => {
    callback(err,rows);
  });
};


module.exports.searchdb = searchdb;