const path = require('path');
const ReactIs = require('react-is');

const target = process.env.PLATFORM || 'wechat';

module.exports = {
  output: `dist/${target}`,
  alias: {
    'remax/base': `./node_modules/remax/${target}.js`,
    'react-redux': './node_modules/remax-redux/lib/index.js', // 使用 remax-redux
    // 'dva-core': './node_modules/dva-core/dist/index.js',
    '@components': 'src/components',
  },
};
