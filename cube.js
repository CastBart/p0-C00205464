/*! cube v0.0.0 - MIT license */
'use strict';

var cube = function (x) {
  var first = x*x;
  var second = first *x;
  return second;
  // your code goes here
}

if ( typeof module !== "undefined" ) {
  module.exports = cube;
}