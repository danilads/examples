
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    alias: {
      styles: resolve(__dirname, '../src/styles'), // Делаем папку styles доступной как alias
      components: resolve(__dirname, '../src/components'),
      components: resolve(__dirname, '../src/components'),
      reducers: resolve(__dirname, '../src/redux/reducers'),
    },
    extensions: ['.js', '.jsx', '.ts','.tsx'],
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
              additionalData: `@use "styles/variables.scss" as *;`  // Подключаем переменные
              // sassOptions: {
              //   includePaths: [resolve(__dirname, '../src/styles')] // Указываем путь для поиска SCSS файлов
              // }
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
  performance: {
    hints: false,
  },
  output: {
    filename: '[name].js',
    assetModuleFilename: 'src/assets/[name][ext]'
   }
};
