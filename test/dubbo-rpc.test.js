'use strict';

const fs = require('fs');
const path = require('path');
const mock = require('egg-mock');
const assert = require('assert');
const sleep = require('mz-modules/sleep');

describe('test/dubbo-rpc.test.js', () => {
  let app;
  before(async function() {
    app = mock.app({
      baseDir: 'apps/dubbo-rpc-test',
      framework: true,
    });
    await app.ready();
    await sleep(2000);
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should invoke dubbo rpc ok', () => {
    return app.httpRequest()
      .get('/')
      .expect('hello gxcsoccer')
      .expect(200);
  });

  it('should invoke echoPerson', async function() {
    await app.rpcRequest('eggjs.demo.DemoService')
      .invoke('echoPerson')
      .send([{
        name: '宗羽',
        address: 'C 空间',
        id: 68955,
        salary: 10000000,
      }])
      .expect({
        name: '宗羽',
        address: 'C 空间',
        id: 68955,
        salary: 10000000,
      });

    const data = fs.readFileSync(path.join(app.config.baseDir, 'logs/dubbo-rpc-test/opentracing.log'), 'utf8');
    const spans = data.trim().split('\n').map(item => {
      return JSON.parse(item);
    });
    assert(spans && spans.length === 4);
  });
});
