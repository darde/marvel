var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/js/index.jsx'],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
         test: /\.jsx?$/,
         exclude: [/node_modules/],
         use: [{
           loader: 'babel-loader',
           options: { presets: ['es2015', 'react', 'stage-0'] }
         }]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader'}
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader'},
          { loader: 'less-loader' },
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/i,
        use: {
          loader: 'url?limit=10000!img?progressive=true'
        }
      },
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  },

  resolveLoader: { moduleExtensions: ["-loader"] },

  devtool: 'source-map',

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: './src/html' },
      { from: './src/img/favicon.ico', to: './img'}
    ])
  ],

  devServer: {
    inline: true,
    hot: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 7000
  }
}
