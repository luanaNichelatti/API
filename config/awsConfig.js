const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
  region: "us-east-1",
  accessKeyId: '', 
  secretAccessKey: ''
});

const s3 = new AWS.S3();

module.exports = s3;