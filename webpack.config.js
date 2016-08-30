"use strict"; //eslint-disable-line
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.NoErrorsPlugin(),

];
let extractCSS = undefined;

const entry = ['babel-polyfill', './app/index'];

if (process.env.NODE_ENV === 'production') {
  extractCSS = new ExtractTextPlugin('style/css/[name].css');
  plugins = [new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: { warnings: false },
  }), extractCSS].concat(plugins);
}
module.exports = {
  devtool: 'source-map',
  entry,
  output: {
    path: path.join(__dirname, '/static/'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins,
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/,
    }, {
      test: /\.scss$/,
      loaders: process.env.NODE_ENV === 'production' ? extractCSS.extract(['css', 'sass'])
        : ['style', 'css', 'sass'],
    }],
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
    modulesDirectores: [
      'node_modules',
      'app',
    ],
  },
};
