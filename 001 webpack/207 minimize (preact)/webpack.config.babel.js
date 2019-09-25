import MiniCssExtractPlugin from "mini-css-extract-plugin";
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

const devMode = process.env.NODE_ENV === 'development';

module.exports = {
  //устанавливается в packaje.json (нужен cross-env)
 mode: process.env.NODE_ENV,
 //mode: 'development',
 //mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  },
  devtool: devMode?'inline-source-map':undefined, //'source map' - для того чтобы в chrome в вкладке source можно было читать несобранный код
  devServer: {
    inline:true,
    //port: 8080,
    historyApiFallback: true, //для react-router-dom (cannot get какой-то url)
  },
  entry: {
		main: './App.js'
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
	new MiniCssExtractPlugin({
		// Options similar to the same options in webpackOptions.output
		// both options are optional
		filename: "bundle.css"
	  })
	]
};