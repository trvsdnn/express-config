process.env.NODE_ENV = 'production';

var assert = require('assert'),
    config = require('..');

assert.ok(config.foo);
assert.equal(config.foo, 'productioning');
