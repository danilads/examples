
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts','.tsx'],
    alias: {
      assets: resolve(__dirname, '../src/assets'),
      components: resolve(__dirname, '../src/components'),
      pages: resolve(__dirname, '../src/pages'),
      primitives: resolve(__dirname, '../src/primitives'),
      store: resolve(__dirname, '../src/store'),
      styles: resolve(__dirname, '../src/styles'),
      svg: resolve(__dirname, '../src/svg'),
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
                @use "styles/global.scss" as *;
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
