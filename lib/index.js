/*--------------------------------------------------------------
 *  Author: Echo Chen
 *  Date:   2018-05-11
 *-------------------------------------------------------------*/

'use strict';

const pitFactory = require('./pit-factory');

module.exports = {
  initializer: ({ types, schema, columnMap }) => pitFactory({ types, schema, columnMap }),
};
