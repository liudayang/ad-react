const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const OpenBrowserPlugin = require('open-browser-webpack4-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpackConfigBase = require('./webpack.base.config');
const mockMiddleware = require('./mock.config');

const smp = new SpeedMeasurePlugin();

const PORT = 8080;
const webpackConfigDev = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'AD APP',
      filename: 'index.html',
      template: path.join(__dirname, '../src/index.html')
    }),
    new OpenBrowserPlugin({
      url: `http://localhost:${PORT}/#/`,
    }),
  ],
  devtool: 'eval-source-map'
}

module.exports = merge(webpackConfigBase, webpackConfigDev);
