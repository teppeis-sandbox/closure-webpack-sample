'use strict';

const path = require('path');
const webpack = require('webpack');
const ClosurePlugin = require('closure-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new ClosurePlugin({mode: 'AGGRESSIVE_BUNDLE'}, {
      // compiler flags here
      // for debuging help, try these:
      // formatting: 'PRETTY_PRINT',
      // debug: true,
    }),
  ],
  output: {
    filename: 'bundle.webpack.aggressive.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
