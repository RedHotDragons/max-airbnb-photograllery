const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://ec2-3-89-109-178.compute-1.amazonaws.com/airbnb',{useNewUrlParser: true});

const Listing = require('./mongoSchema.js');

var searchdb = function (id, callback) {
  Listing.find({id: id}, (err,rows) => {
    callback(err,rows);
  });
};


module.exports.searchdb = searchdb;
