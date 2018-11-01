'use strict';

const utility = require('utility');

// 生成一个稳定的唯一的 app key
exports.createAppKeys = function(appname) {
  return utility.md5(utility.sha1(utility.md5(utility.sha1(appname + '.keys')))) + '.' + appname;
};
