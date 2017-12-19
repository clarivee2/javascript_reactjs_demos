// webpack configuration for this project
const path = require('path');

module.exports = {
  entry: {
    app_inline: './src/index_inline.js'
  },
  output: {
    filename: 'bundle.[name].js',
    path: path.resolve(__dirname, 'Public')
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};