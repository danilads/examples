const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const devMode = process.env.NODE_ENV === 'development';

module.exports = {
 //устанавливается в packaje.json (нужен cross-env)
 mode: process.env.NODE_ENV,
 //mode: 'development',
 //mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
		uglifyOptions: {
			output: {
			  comments: false
			}
		  }
	  })
    ]
  },
  devtool: devMode?'inline-source-map':undefined, //'source map' - для того чтобы в chrome в вкладке source можно было читать несобранный код
  devServer: {
    inline:true,
    historyApiFallback: true, //для react-router-dom (cannot get какой-то url)
    //port: 8080
    proxy: { //для определенных запросов
      '/api/': 'http://172.30.71.195:9080/SBOL-Business/',
      '/remote/': 'http://172.30.71.195:9080/SBOL-Business/',
      '/internal/': 'http://172.30.71.195:9080/SBOL-Business/',
      '/logout': 'http://172.30.71.195:9080/SBOL-Business/',
    }
  },
  entry: {
		main: ['babel-polyfill', './app.js'] //для работы async / await
	},
  output:{ 
	path: __dirname, // путь к каталогу выходных файлов
	filename: "bundle.js",  // название создаваемого файла
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
		{
			test: /\.(js|jsx)?$/,
			use: {
				loader: "babel-loader"
		}
		},
      {
        test: /\.(scss|css)$/,
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
    //копирует папки fonts/images
    new CopyWebpackPlugin([
      {
        from: 'fonts',
        to: 'fonts'
      }
    ]),
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
  ],
  //нужен для запросов
  externals: {
    'config': JSON.stringify({
     "backendServiceHost": "/",
    })
  }
};