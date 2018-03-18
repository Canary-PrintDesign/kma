require('postcss-scss');
require('postcss-easy-import');

const autoprefixer = require('autoprefixer');

module.exports = {
  parser: 'postcss-scss',
  plugins: {
    'postcss-easy-import': { extensions: '.scss', prefix: '_' },
    'postcss-node-sass': {},
    autoprefixer: { browsers: ['last 1 versions'] },
    cssnano: { preset: 'default' },
  }
}
