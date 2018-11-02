'use strict';

const mock = require('egg-mock');
const sleep = require('mz-modules/sleep');

describe('test/dubbo-rpc.test.js', () => {
  let app;
  before(async function() {
    app = mock.app({
      baseDir: 'apps/dubbo-rpc-test',
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

  it('should invoke echoPerson', done => {
    app.rpcRequest('eggjs.demo.DemoService')
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
      }, done);
  });
});
