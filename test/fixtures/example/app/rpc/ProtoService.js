'use strict';

exports.echoObj = async function(req) {
  return {
    code: 200,
    message: 'hello ' + req.name + ' from egg-cloud',
  };
};

exports.interfaceName = 'com.alipay.sofa.rpc.protobuf.ProtoService';
