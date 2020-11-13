const express = require('express');
const app = express();
const port = 8000;
const axios = require('axios');
const fetchphotos = require('../helper/aws.js');


app.use(express.static(__dirname +'/../client/dist'))

app.get('/req', function (req,res) {
  //get the correct folder name and the number of photos from the mysql database
  //invoke the fetchphotos function
  fetchphotos.fetchphotos(res);
})


app.listen(port, function () {

  console.log(`Server is listening on port: ${port}`);
})



// module.exports.app = app;