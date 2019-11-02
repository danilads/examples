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
		main: ['babel-polyfill', './app.js'] //для работы async / await
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
    },
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
        from: 'jsonBackUp',
        to: 'jsonBackUp'
      },
      {
        from: '05_images',
        to: '05_images'
      },
      {
        from: '06_files',
        to: '06_files'
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