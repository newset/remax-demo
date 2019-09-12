const path = require('path');
const ReactIs = require('react-is');

const target = process.env.PLATFORM || 'wechat';

module.exports = {
  output: `dist/${target}`,
  alias: {
    'react-reconciler':
      './node_modules/react-reconciler/cjs/react-reconciler.production.min.js',
    'remax/base': `./node_modules/remax/${target}.js`,
    '@components': 'src/components',
  },
};
