const path = require('path');
const ReactIs = require('react-is');

const target = process.env.PLATFORM || 'wechat';

module.exports = {
  output: `dist/${target}`,
  alias: {
    'remax/base': `./node_modules/remax/${target}.js`,
    'dva-core': './node_modules/dva-core/dist/index.js',
    // 'react-redux': './node_modules/remax-redux/lib/index.js', // 1.0.x 基于 src resolve，暂时只能使用 `..` 来引用
    // '@componets': 'src/components'
  },
};
