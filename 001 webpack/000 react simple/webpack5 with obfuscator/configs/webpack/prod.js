// production config
const { merge } = require('webpack-merge');
const { resolve } = require('path');

const commonConfig = require('./common');
var WebpackObfuscator = require('webpack-obfuscator');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './index.js',
  devtool: 'source-map',
  output: {
    filename: 'js/bundle.[contenthash].min.js',
    path: resolve(__dirname, '../../dist'),
    publicPath: '/',
  },
  plugins: [
    new WebpackObfuscator({
        rotateStringArray: true
    }, ['index.js'])
]
});
