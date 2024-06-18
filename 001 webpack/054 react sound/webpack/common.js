// shared config (dev and prod)
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  context: resolve(__dirname, '../src'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|mp3|wav)$/,
        type: 'asset/resource'
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: 'index.html' })],
  performance: {
    hints: false,
  },
  output: {
    filename: '[name].js',
    assetModuleFilename: 'src/assets/[name][ext]'
   }
};
