const path = require('path');

module.exports = {
  entry: {
    app: './src/app.ts'
  },
  resolve: {
    extensions : ['.js','.ts'],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.ts$/, // include .ts files
      enforce: "pre", // preload the jshint loader
      exclude: /node_modules/, // exclude any and all files in the node_modules folder
      use: [{
        loader: "awesome-typescript-loader",
        options: {
          camelcase: true,
          emitErrors: false,
          failOnHint: false
        }
      }]
    }]
  },
  devServer : {
      port: 3000,
  },
};