const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ip = require("ip");
const hostname = ip.address() || 'localhost';
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
  mode: 'development',
  devServer: {
    host: `${hostname}`,
    port: 3060,
    historyApiFallback: {
      disableDotRule: true
    },
    inline: true,
    watchOptions: {
      poll: true
    },
    compress: true,
    open: true
  },
  entry: ['babel-polyfill', "./src/index"],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /\.module\.css$/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({ template: "./public/index.html" }),
    new MiniCssExtractPlugin(),
    new NodePolyfillPlugin()
  ]
}; 
