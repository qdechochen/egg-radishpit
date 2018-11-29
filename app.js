'use strict';
const path = require('path');
const { pit, superpit } = require('radishpit');
const pitFactory = require('./lib/pit-factory');

module.exports = app => {
  app.loader.loadToApp(path.join(app.baseDir, 'app/schema'), 'schema', {
    ignore: 'types.js',
    call: false,
    initializer: (schema) => {
      if (typeof schema === 'function') {
        return pitFactory(schema(app));
      } else {
        return pitFactory(schema);
      }
    },
  });
  app.radishpit = {
    pit,
    superpit,
  };
  console.log('======== radishpit loaded =============');
};
