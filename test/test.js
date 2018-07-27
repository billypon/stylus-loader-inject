var assert = require('assert');
var find = require('module-find')();

it('inject', function () {
  var module = find('stylus-loader');
  var file = require.resolve(module);
  var fs = require('fs');
  var str = fs.readFileSync(file).toString();
  assert.equal(true, str.indexOf('(require(process.cwd()))(options);') > 0);
});
