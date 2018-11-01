'use strict';

const utils = require('../lib/util');

module.exports = appInfo => ({
  keys: utils.createAppKeys(appInfo.name),
});
