const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: [path.join(__dirname, "dist"), path.join(__dirname, "")]
    // ,
    // noInfo: true,
    // hot: true,
    // inline: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin({ // define where to save the file
      filename: '[name].bundle.css',
      allChunks: true,
    })
  ],
  module: {
    rules: [
      // { // regular css files
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract(['css-loader?importLoaders=1'])
      // },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.html$/,
        // loader: ExtractTextPlugin.extract([])
        use: 'html-loader'
      },
    ]
  }
};
