
 var glob = require("glob")
 
// options is optional
glob(__dirname+"/*.js", function (er, files) {
  console.log(files)
})