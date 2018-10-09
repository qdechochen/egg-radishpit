/*--------------------------------------------------------------
 *  Author: Echo Chen
 *  Date:   2018-05-11
 *-------------------------------------------------------------*/

'use strict';
const { superpit } = require('radishpit');

const factory = ({ types, schema, columnMap }) => {
  const pit = superpit(types);

  Object.keys(schema).forEach(key => {
    if (typeof schema[key] === 'string') {
      schema[key] = {
        type: schema[key],
      };
    }
    if (schema[key].type.endsWith('?')) {
      schema[key].required = false;
      schema[key].type = schema[key].type.substring(0, schema[key].type.length - 1);
    } else {
      schema[key].required = true;
    }
  });

  const getSchema = fields => {
    const selected = {};

    fields.forEach(field => {
      if (field in schema) {
        selected[field] = Object.assign({}, schema[field]);
      } else {
        console.error(`[egg-radishpit] field ${field} not found in schema`);
      }
    });

    return selected;
  };

  const generator = fields => {
    if (fields instanceof Array) {
      return pit(getSchema(fields));
    }

    return pit(schema);
  };

  generator.getSchema = getSchema;
  generator.columnMap = columnMap;

  return generator;
};

module.exports = factory;
