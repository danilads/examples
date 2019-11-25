import MiniCssExtractPlugin from "mini-css-extract-plugin";
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from "html-webpack-plugin";

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
    //port: 8080,
    proxy: { //для определенных запросов
      '/api/': 'http://172.30.71.195:9080/SBOL-Business/',
      '/remote/': 'http://172.30.71.195:9080/SBOL-Business/',
      '/internal/': 'http://172.30.71.195:9080/SBOL-Business/',
      '/logout': 'http://172.30.71.195:9080/SBOL-Business/',
    }
  },
  entry: {
		main: ['babel-polyfill', './app.jsx'] //для работы async / await
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
        enforce: 'pre',
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)?$/,
        resolve: { extensions: [".js", ".jsx"] },
        exclude: /node_modules/,
        loader: 'babel-loader',
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
      },
      {
        test: /\.(png|jpe?g|gif|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      }
    ]
  },
  plugins: [
    // при запуске открывает страницу с размерами пакетов и компонентов
    // new BundleAnalyzerPlugin(),
	  //копирует папки fonts/images
    new CopyWebpackPlugin([
      {
        from: 'fonts',
        to: 'fonts'
      },
      {
        from: 'mock',
        to: 'mock'
      },
      {
        from: '04_images',
        to: '04_images'
      },
      {
        from: '05_files',
        to: '05_files'
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