import MiniCssExtractPlugin from "mini-css-extract-plugin";
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

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
	path: __dirname, 
	filename: "bundle.js", 
  }, 
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
		{
      test: /\.(js|jsx)?$/,
      exclude: /node_modules/,
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
		filename: "bundle.css"
	  })
	]
};