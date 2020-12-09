const express = require('express');
const app = express();
const port = 3001;
const axios = require('axios');
const db = require('../database/searchdb.js');
// const router = express.Router()
// const Profile = require('../Database/Profile');

app.use(express.static(__dirname +'/../client/dist'))

app.get('/api/photo-gallery/data', function (req,res) {
  //get the correct folder name and the number of photos from the mysql database
  //invoke the fetchphotos function

  db.searchdb((err,listing) => {
    console.log('%%%')
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