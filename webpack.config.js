const HtmlWebpackPlugin = require('html-webpack-plugin');
const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');
const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '!!html-loader!templates/index.html',
      favicon: path.resolve(__dirname, 'assets/images/lailo-favicon.ico'),
      title: 'Lailo Web Design & Development',
      cspPlugin: {
        enabled: true,
        policy: {
          'base-uri': "'self'",
          'object-src': "'none'",
          'script-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'"],
          'style-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'"]
        },
        hashEnabled: {
          'script-src': true,
          'style-src': true
        },
        nonceEnabled: {
          'script-src': true,
          'style-src': true
        }
      }
    }),
    new CspHtmlWebpackPlugin({
      'font-src': "'self' data:;",
      'base-uri': "'self'",
      'object-src': "'none'",
      'script-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'"],
      'style-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'"]
    }, {
      enabled: false,
      hashingMethod: 'sha256',
      hashEnabled: {
        'script-src': true,
        'style-src': true
      },
      nonceEnabled: {
        'script-src': true,
        'style-src': true
      }
    })
  ],
  devtool: 'sourcemap',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  }
};
