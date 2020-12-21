const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.use(cors());

app.get("/ping", function (req, res) {
  return res.send("pong");
});

app.get("/robots", function (req, res) {
  return res.send("Robots Page");
});

app.get("/robot", function (req, res) {
  return res.send("I am a robot page");
});

function getFiles(dir, files_) {
  console.log(dir);
  files_ = files_ || [];
  var files = fs.readdirSync(dir);
  for (var i in files) {
    var name = dir + "/" + files[i];
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_);
    } else {
      files_.push(name);
    }
  }
  return files_;
}

app.get("/files", function (req, res) {
  const files = getFiles("../react_example/src/images");
  return res.send(files);
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080);
