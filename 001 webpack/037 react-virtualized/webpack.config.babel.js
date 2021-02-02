import MiniCssExtractPlugin from "mini-css-extract-plugin";
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import HtmlWebpackPlugin from "html-webpack-plugin";

const devMode = process.env.NODE_ENV === 'development';

module.exports = {
 mode: process.env.NODE_ENV,
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
  devtool: devMode?'inline-source-map':undefined,
  devServer: {
    inline:true,
    historyApiFallback: true,
  },
  entry: {
		main: ['babel-polyfill', './app.jsx']
	},
  output:{ 
    path: __dirname,
    publicPath: '/',
	  filename: "bundle.js",
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
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: false
    })
  ],
};