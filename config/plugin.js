'use strict';

exports.rpc = {
  enable: true,
  package: 'egg-rpc-base',
};

exports.dubboRpc = {
  enable: true,
  package: 'egg-dubbo-rpc',
};

exports.opentracing = {
  enable: true,
  package: 'egg-opentracing',
};

exports.zipkin = {
  enable: false,
  package: 'egg-opentracing-zipkin',
};

exports.prometheus = {
  enable: false,
  package: 'egg-prometheus',
};

exports.react = {
  enable: false,
  package: 'egg-view-react',
};
