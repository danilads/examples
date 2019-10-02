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
    //port: 8080
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
      //для react-virtualized
      //исключаем обработку babel loader'ом 
      exclude: [
        /node_modules[\\/]react-virtualized/,
      ],
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
	]
};