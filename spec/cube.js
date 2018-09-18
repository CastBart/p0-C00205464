var path = require('path');
var expect = require('chai').expect;

var cube = require(path.join(__dirname, '..', './cube.js'));

describe('cube()', function () {
  'use strict';

  it('exists', function () {
    expect(cube).to.be.a('function');

  });

  it('multiply a number by it self twice', function () {
    expect(cube(2)).to.equal(8);
  });

  it('multiply a number by it self twice', function () {
    expect(cube(9)).to.equal(729);
  });

  it('multiplying a negative 8', function () {
    expect(cube(-8)).to.equal(-512);
  });
  it('0 cubed', function () {
    expect(cube(0)).to.equal(0);
  });



  // Add more assertions here
});
