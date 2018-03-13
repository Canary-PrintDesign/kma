const autoprefixer = require('autoprefixer');

module.exports = ctx => ({
  plugins: {
    'postcss-node-sass': {},
    autoprefixer: { browsers: ['last 1 versions'] },
    cssnano: { preset: 'default' },
  }
});
