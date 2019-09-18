const path = require('path');
const ReactIs = require('react-is');

const target = process.env.PLATFORM || 'wechat';

module.exports = {
  output: `dist/${target}`,
  alias: {
    'remax/base': `./node_modules/remax/${target}.js`,
    '@components': 'src/components',
  },
  postcss: {
    use: [['less', {}], ['stylus', {}]],
  },
};
