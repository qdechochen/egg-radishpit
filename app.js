'use strict';
const path = require('path');
const { pit, superpit } = require('radishpit');
const { initializer } = require('./lib');

module.exports = app => {
  app.loader.loadToApp(path.join(app.baseDir, 'app/schema'), 'schema', {
    ignore: 'types.js',
    call: false,
    initializer,
  });
  app.radishpit = {
    pit,
    superpit,
  };
  console.log('======== radishpit loaded =============');
};
