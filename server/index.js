var newrelic = require('newrelic');

const express = require('express');
const app = express();
const port = 3001;
const axios = require('axios');
const db = require('../datab/searchdb.js');
const path = require('path');
const morgan = require('morgan');

// const router = express.Router()
// const Profile = require('../Database/Profile');

app.use(morgan('dev'));

app.use(express.static(__dirname +'/../client/dist'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
});

app.get('/:id', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
});

app.get('/api/photo-gallery/:id', function (req,res) {
  //get the correct folder name and the number of photos from the mysql database
  //invoke the fetchphotos function
  var listingId = req.params.id;
  db.searchdb(listingId, (err,listing) => {
    if(err) {
      res.status(400)
      res.end();
    }
    res.send(listing);
  })
})

var server = app.listen(port, function () {
  console.log(`Server is listening on port: ${port}`);
});



module.exports.server = server;

// router.get('/', function(req, res, next) {

//   Profile.find(null, function(err, profiles) {
//     if (err) {
//       console.log('Error is: ', err)
//     }
//     res.json({
//       confirmation: 'success',
//       results: profiles
//     })
//   })

//   // res.render('index', { header: 'TESTER', visitor: 'Max' })

//   // res.json({
//   //   confirmation: 'success',
//   //   message: 'hello'
//   // })
// })

// module.exports = router;
