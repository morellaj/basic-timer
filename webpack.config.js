const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: '[name][chunkhash:4].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true,
    }),
    new CopyPlugin([
      { from: '_redirects', to: '_redirects', toType: 'file' },
    ]),
  ],
};
