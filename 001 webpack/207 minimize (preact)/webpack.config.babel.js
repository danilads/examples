import MiniCssExtractPlugin from "mini-css-extract-plugin";
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from "html-webpack-plugin";

const devMode = process.env.NODE_ENV === 'development';

module.exports = {
 mode: process.env.NODE_ENV,
 //mode: 'development',
 //mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  },
  devtool: devMode?'inline-source-map':undefined, //'source map'
  devServer: {
    inline:true,
    //port: 8080,
    historyApiFallback: true, 
  },
  entry: {
		main: './App.js'
	},
  output:{ 
    path: __dirname + '/public', // путь к каталогу выходных файлов
    publicPath: '/',
	  filename: "bundle.js",  // название создаваемого файла
  }, 
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
		{
      test: /\.(js|jsx)?$/,
      resolve: { extensions: [".js", ".jsx"] },
			use: {
				loader: "babel-loader"
		}
		},
      {
        test: /\.(css|scss)$/,
    use: [
        MiniCssExtractPlugin.loader,
        {
            loader: "css-loader",
            options: {
                minimize: {
                    safe: true
                }
            }
        },
        {
          loader: "sass-loader",
          options: {}
        }
      ]
      }
    ]
  },
  plugins: [
    // при запуске открывает страницу с размерами пакетов и компонентов
    // new BundleAnalyzerPlugin(),
    // //копирует папки fonts/images
    // new CopyWebpackPlugin([
    //   {
    //     from: 'fonts',
    //     to: 'fonts'
    //   }
    // ]),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "bundle.css"
    }),
    //копирует index.html в папку
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: false
    })
	]
};