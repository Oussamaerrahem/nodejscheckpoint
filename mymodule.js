var fs = require("fs");
fs.readFile('./mymodule.js', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
 });
 fs.readFile('./make-it-modular.js', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
 });
 