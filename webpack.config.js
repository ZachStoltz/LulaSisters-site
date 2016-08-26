const path = require('path');
const webpack = require('webpack');

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

const entry = ['babel-polyfill', './app/index'];

if (process.env.NODE_ENV === 'production') {
  plugins = [new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: { warnings: false },
  })].concat(plugins);
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
      loaders: ['style', 'css', 'sass'],
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
