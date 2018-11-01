'use strict';

const Service = require('../../../../../').Service;

class TestService extends Service {
  async get(name) {
    return await this.proxy.protoService.echoObj({
      name,
      group: 'B',
    });
  }
}

module.exports = TestService;
