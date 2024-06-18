// production config
const { merge } = require('webpack-merge');
const { resolve } = require('path');
const commonConfig = require('./common');
const WebpackObfuscator = require('webpack-obfuscator');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './index.js',
  devtool: 'source-map',
  output: {
    filename: 'js/bundle.[contenthash].min.js',
    path: resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  optimization: {
    moduleIds: 'size',
  },
  plugins: [
    new WebpackObfuscator({
      // doc - https://github.com/javascript-obfuscator/javascript-obfuscator

      // Compact code output on one line.
      compact: true,

      // Dramatically increases size of obfuscated code (up to 200%), use only if size of obfuscated code doesn't matter.
      deadCodeInjection: true,
      deadCodeInjectionThreshold: 1,

      // Can freeze your browser if you open the Developer Tools.
      debugProtection: true,
      debugProtectionInterval: 4000,

      // This option disables console calls globally for all scripts
      disableConsoleOutput: false,

      // Allows to run the obfuscated source code only on specific domains and/or sub-domains.
      domainLock: ['http://localhost:3000/'],
      domainLockRedirectUrl: 'about:blank',

      // Enables numbers conversion to expressions
      numbersToExpressions: true,


      renameGlobals: true,
      renameProperties: true,

      // This option makes the output code resilient against formatting and variable renaming.
      selfDefending: false,


      splitStrings: true,
      splitStringsChunkLength: 10,

   
      stringArray: true,
      stringArrayCallsTransform: true,
      stringArrayCallsTransformThreshold: 0.5,
      stringArrayEncoding: ['base64', 'rc4'],
      stringArrayIndexesType: [
          'hexadecimal-number'
      ],
      stringArrayIndexShift: true,
      stringArrayRotate: true,
      stringArrayShuffle: true,
      stringArrayWrappersCount: 1,

      transformObjectKeys: true,
      unicodeEscapeSequence: true
    }, [])
]
});
