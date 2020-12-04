const express = require("express");
var AWS = require("aws-sdk");
const app = express();
const port = 3000;

const creds = require("./credentials.json");

var s3 = new AWS.S3({
  accessKeyId: creds.id,
  secretAccessKey: creds.pass,
});

var getParams = {
  Bucket: "markussim-testing", //replace example bucket with your s3 bucket name
  Key: "unknown.png", // replace file location with your s3 file location
};

app.get("/", (req, res) => {
  s3.getObject(getParams, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.type('.png').send(data.Body); //this will log data to console
    }
  });
});
app.listen(port, () => console.log(`Example app listening on port port!`));
