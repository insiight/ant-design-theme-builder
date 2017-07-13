var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var buildPath = path.resolve(__dirname, 'docs');
var srcPath = path.resolve(__dirname, 'src');
var IS_PRODUCTION = process.env.NODE_ENV === 'production';

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
      lessHost: IS_PRODUCTION ? '' : '//localhost:8888/node_modules',
    }),
  ],
  resolve: {
    modules: [
      'node_modules',
      srcPath,
    ],
  },
  devtool: 'eval',
};

if (IS_PRODUCTION) {
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
  );
}

module.exports = webpackConfig;
