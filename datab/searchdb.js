const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/airbnb',{useNewUrlParser: true});

const Listing = require('./mongoSchema.js');

var searchdb = function (id, callback) {
  Listing.find({id: id}, (err,rows) => {
    callback(err,rows);
  });
};


module.exports.searchdb = searchdb;