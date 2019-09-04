const path = require('path');
const ReactIs = require('react-is');

const target = process.env.PLATFORM || 'wechat';

module.exports = {
  output: `dist/${target}`,
  alias: {
    'react-redux': '../node_modules/react-redux/lib/alternate-renderers.js',
    // entries: [
    //   { find: /remax$/, replacement: require.resolve('remax/' + target) },
    // ],
  },
  // commonjs: {
  //   'node_modules/react-is/index.js': Object.keys(ReactIs).filter(
  //     k => k !== 'default'
  //   ),
  // },
};
