#!/usr/bin/env node

var fs = require('fs');

var search = 'var manualImports = [];';
var inject = "(require('stylus-loader-inject'))(options);";

if (process.cwd() === __dirname) {
  inject = '(require(process.cwd()))(options);'
}

var replace = inject + '\n\n  ' + search;

require('module-inject')()('stylus-loader', function (str) {
  if (str.indexOf(replace) > 0) {
    return false;
  }

  if (str.indexOf(search) < 0) {
    throw 'fail to inject to stylus-loader';
  }

  return str.replace(search, inject + '\n\n  ' + search);
}, true);
