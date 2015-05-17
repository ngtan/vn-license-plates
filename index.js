var fs = require('fs');

/**
 * Parses vn-license-plates.csv and creates a nodes for fast lookups
 * @return  object   nodes    list of license plates
 */
function load() {
  var data = fs.readFileSync(__dirname + '/vn-license-plates.csv', 'utf8');
  var lines = data.split('\r\n');
  var nodes = {};

  lines.forEach(function(line) {
    var parts = line.split(',');
    var node = nodes;
    for (var i = 0; i < parts.length - 1; i++) {
      node[parts[i]] = parts[i + 1];
    }
  });
  return nodes;
}

/**
 * Lookup a license plates
 * @param  numer    code          input a license plate
 * @return string   province      province of license plate
 */
module.exports.lookup = function (code) {
  if (code.length < 2 || isNaN(code)) {
    return null;
  }

  var nodes = load();

  return nodes[code];
};
