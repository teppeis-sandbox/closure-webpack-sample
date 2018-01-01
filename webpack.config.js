'use strict';

const path = require('path');
const webpack = require('webpack');
const ClosurePlugin = require('closure-webpack-plugin');

// const mode = 'NONE';
// const mode = 'STANDARD';
const mode = 'AGGRESSIVE_BUNDLE';

// const compilation_level = 'WHITESPACE_ONLY';
// const compilation_level = 'SIMPLE';
const compilation_level = 'ADVANCED';

module.exports = {
  entry: './src/index.js',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new ClosurePlugin({
      mode,
      closureLibraryBase: require.resolve('google-closure-library/closure/goog/base'),
      deps: './dist/deps.js',
    }, {
      compilation_level,
      formatting: 'PRETTY_PRINT',
      debug: true,
    }),
  ],
  output: {
    filename: `bundle.${mode.toLowerCase()}.${compilation_level.toLowerCase()}.js`,
    path: path.resolve(__dirname, 'dist'),
  },
};
