// shared config (dev and prod)
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { GitRevisionPlugin } = require('git-revision-webpack-plugin')
const gitRevisionPlugin = new GitRevisionPlugin();

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  context: resolve(__dirname, '../../src'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?hash=sha512&digest=hex&name=img/[contenthash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
    ],
  },
  optimization: {
    moduleIds: 'named',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new webpack.DefinePlugin({
      TEST: JSON.stringify('test'),
      gitRevisionPlugin: JSON.stringify(gitRevisionPlugin),
      VERSION: JSON.stringify(gitRevisionPlugin.version()),
      COMMITHASH: JSON.stringify(gitRevisionPlugin.commithash()),
      BRANCH: JSON.stringify(gitRevisionPlugin.branch()),
      LASTCOMMITDATETIME: JSON.stringify(gitRevisionPlugin.lastcommitdatetime())
    })
  ],
  performance: {
    hints: false,
  },
};
