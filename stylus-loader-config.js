module.exports = function (options) {
  options.define.node_modules = __dirname + '/node_modules/';
  options.include.push(__dirname + '/node_modules');
  options.use.push(require('stylus-less')());
}
