
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts','.tsx'],
    alias: {
      styles: resolve(__dirname, '../src/styles'),
      components: resolve(__dirname, '../src/components'),
      assets: resolve(__dirname, '../src/assets'),
      reducers: resolve(__dirname, '../src/redux/reducers'),
    }
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
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: `
                @use "styles/variables.scss" as *;
                @use "styles/breakpoints.scss" as *;
              `
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff)$/,
        type: 'asset/resource'
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: 'index.html' })],
};
