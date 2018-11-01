'use strict';

exports.sofaRpc = {
  enable: true,
  package: 'egg-sofa-rpc',
};

exports.opentracing = {
  enable: true,
  package: 'egg-opentracing',
};

exports.zipkin = {
  enable: false,
  package: 'egg-opentracing-zipkin',
};

exports.sofaTracer = {
  enable: true,
  package: 'egg-sofa-tracer',
};

exports.prometheus = {
  enable: false,
  package: 'egg-prometheus',
};

exports.lookout = {
  enable: false,
  package: 'egg-lookout',
};

exports.react = {
  enable: false,
  package: 'egg-view-react',
};
