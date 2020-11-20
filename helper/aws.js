
const AWS = require('aws-sdk');
const request = require('./config.js');



AWS.config.update({
  accessKeyId: request.request.accessKeyId,
  secretAccessKey: request.request.secretAccessKey
})

var s3 = new AWS.S3();


var fetchphotos = function (res) {

  s3.getObject({Bucket: "airbnb-photo-gallery", Key: `${Sonja}House/photo${var}.jpg`}, function (error, data) {
    if(error){
      res.end();
    } else {
      res.send(data.Body);
    }
  });
  res.end();
};

module.exports.fetchphotos = fetchphotos;