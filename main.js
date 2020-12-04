var AWS = require("aws-sdk");
var fs = require("fs");
const creds = require("./credentials.json");

var s3 = new AWS.S3({
  accessKeyId: creds.id,
  secretAccessKey: creds.pass,
});

let file = "screen.png"

fs.readFile(file, function (err, data) {
  params = { Bucket: "markussim-testing", Key: file, Body: data };

  s3.putObject(params, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully uploaded data to myBucket/myKey");
    }
  });
});
