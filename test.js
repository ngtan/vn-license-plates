var assert = require('assert');
var licensePlates = require('./');
var fs = require('fs');

var data = fs.readFileSync('./vn-license-plates.csv', 'utf8');
var lines = data.split('\r\n');
    lines.pop();

lines.forEach(function (line) {
  var parts = line.split(',');
  var lp = parts[0];
  var province = parts[1];
  assert.deepEqual(licensePlates.lookup(lp), province);
});
