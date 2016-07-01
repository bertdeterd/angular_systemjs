/* ----------------------------------------------
 Reason for choosing webpack:
 - Angular 2 is a SPA
 - A SPA is the type of web app webpack is designed and optimized for
---------------------------------------------- */ 
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
 
  entry: {  app: './app/main'}, 
  
  output: { 
      path: path.resolve('dist/'),
      filename: "[name]-bundle.js"
  } ,

  webpack: webpack,
  devtool: 'source-map',
  
  //order matters for debugging in chrome
  resolve: {
    extensions: ['', '.ts', '.js', '.html' ], 
    modulesDirectories: ["node_modules"]
  },
   
  module: {
      loaders: [
          {
            test: /\.ts$/,
            loader: 'ts-loader',
            exclude: /node_modules/
          },

          {
            test: [/\.html$/, /\.css$/],
            loader: "raw-loader",
            exclude: /node_modules/
          }

      ]
  },


   plugins: [
    new HtmlWebpackPlugin({
      filename:'index.html',
      template: 'index-template.html',
      favicon: 'public/favi.ico'
   })
  ]

};