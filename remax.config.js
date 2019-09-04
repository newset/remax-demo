const path = require('path');
const ReactIs = require('react-is');

const target = process.env.PLATFORM || 'wechat';

module.exports = {
  output: `dist/${target}`,
  alias: {
    // 'react-redux': './node_modules/react-redux/es/alternate-renderers.js',
    'react-redux': '../node_modules/react-redux/es/alternate-renderers.js',
  },
};
