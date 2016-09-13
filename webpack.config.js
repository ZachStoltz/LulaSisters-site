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
let styleLoader = undefined;

const entry = ['babel-polyfill', './app/index'];

if (process.env.NODE_ENV === 'production') {
  extractCSS = new ExtractTextPlugin('style/css/[name].css');
  plugins = [new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: { warnings: false },
  }), extractCSS].concat(plugins);

  styleLoader = {
    test: /\.scss$/,
    loader: extractCSS.extract(['css', 'sass']),
  };
} else {
  styleLoader = {
    test: /\.scss$/,
    loaders: ['style', 'css', 'sass'],
  };
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
      test: /\.json$/,
      loader: 'json',
      exclude: /node_modules/,
    },
      styleLoader,
    ],
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
    modulesDirectores: [
      'node_modules',
      'app',
    ],
  },
};
