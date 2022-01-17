const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production'

const webpackBaseConfig = {
  entry: path.resolve(__dirname, '../src/index'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[fullhash:4].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      },
      {
        test: /\.(sc|css)?$/,
        use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'scss-loader']
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  }
}


module.exports = webpackBaseConfig