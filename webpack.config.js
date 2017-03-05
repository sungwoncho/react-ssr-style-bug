var webpack = require("webpack");

module.exports = {
  entry: {
	  app: './src.js',
  },
  output: {
    path: './public/',
    publicPath: '/',
    filename: 'dist.js',
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react']
        }
      },
    ]
  },
};
