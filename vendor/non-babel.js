var foo = require("./src/foo")

// This file is raw ES5 (not arrow function
module.exports = function(x){
  // non babebabe
  return (x => 10)
}