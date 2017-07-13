var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var buildPath = path.resolve(__dirname, 'dist');
var srcPath = path.resolve(__dirname, 'src');

var webpackConfig = {
  entry: {
    index: path.join(srcPath, 'index.js'),
  },
  output: {
    path: buildPath,
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.ejs$/,
        loader: 'ejs-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'env', 'stage-0'],
              plugins: ['transform-class-properties'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.md/,
        use: [
          { loader: 'raw-loader' },
        ],
      },
    ],
  },
  plugins: [
    // use html-webpack-plugin to create index.html
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'src/index.ejs',
      filename: 'index.html',
      chunks: ['index'],
    }),
  ],
  resolve: {
    modules: [
      'node_modules',
      srcPath,
    ],
  },
  devtool: 'source-map',
};

module.exports = webpackConfig;
