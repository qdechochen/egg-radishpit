/*--------------------------------------------------------------
 *  Author: Echo Chen
 *  Date:   2018-05-16
 *-------------------------------------------------------------*/

'use strict';

module.exports = {
  validate(validator, data) {
    const errors = validator.test(data);
    if (errors) {
      this.throw(422, 'validation_failed', {
        errors,
      });
    }
  },
};
