var fs = require('fs');

var config = process.cwd() + '/stylus-loader-config.js';

module.exports = function (options) {
  if (fs.existsSync(config)) {
    require(config)(options);
  }
}
