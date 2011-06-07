process.env.NODE_ENV = 'testing';

var assert = require('assert');

assert.throws(
  function() {
    var config = require('..');
  },
  /^Error: Config file not found/gi
);
