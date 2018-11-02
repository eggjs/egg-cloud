// Don't modified this file, it's auto created by jar2proxy

'use strict';

const path = require('path');

/* eslint-disable */
/* istanbul ignore next */
module.exports = function (app) {
  const appName = 'jar2proxy';
  let version = '1.0.0';
  if (app.config.proxy && app.config.proxy.envVersion) {
    version = app.config.proxy.envVersion[appName] || version;
  }
  const rpcClient = app.rpcClient;
  if (!rpcClient) return;
  const consumer = rpcClient.createConsumer({
    interfaceName: 'eggjs.demo.DemoService',
    version,
    targetAppName: appName,
    group: 'HSF',
    proxyName: 'demoService',
    responseTimeout: 3000,
  });

  
  class DemoService extends app.Proxy {
    constructor(ctx) {
      super(ctx, consumer);
    }

    // java source code:  String sayHello(String name);
    // returnType: java.lang.String
    async sayHello(name) {
      const args = [
        {
          $class: 'java.lang.String',
          $: name,
        }
      ];
      return await consumer.invoke('sayHello', args, {
        ctx: this.ctx,
      });
    }

    // java source code:  Person echoPerson(Person p);
    // returnType: eggjs.demo.Person
    async echoPerson(p) {
      const args = [
        {
          $class: 'eggjs.demo.Person',
          $: p,
        }
      ];
      return await consumer.invoke('echoPerson', args, {
        ctx: this.ctx,
      });
    }
  }
  return DemoService;
};

/* eslint-enable */

