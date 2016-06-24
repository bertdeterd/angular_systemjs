var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//var nodeExternals = require('webpack-node-externals');
var path = require('path');

module.exports = {
 // entry: "./app/main",
  entry: [ './app/main'], //'webpack/hot/dev-server' ,
  
  output: { 
      path: path.resolve('dist/'),//__dirname,
      filename: "bundle.js" //./dist/bundle.js"
  } ,
      
  //
  /*
  target: 'node', // in order to ignore built-in modules like path, fs, etc. 
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder 
  */
  
  devtool: 'source-map',
  
  //resolve.modulesDirectories
  //Default: ["web_modules", "node_modules"] webpack will look in “./mydir”, “../mydir”, “../../mydir”, etc
  
  //order matters for debugging in chrome
  resolve: {
    extensions: ['', '.ts', '.js', '.html' ] //, '.html'
  },


   
  module: {
      loaders: [
          {
            test: /\.ts$/,
            loader: 'ts-loader',
            exclude: /node_modules/
          },

          {
            test: /\.html$/,
            loader: "raw-loader",
            exclude: /node_modules/
          }

      ]
  },
  
   plugins: [
     
     //why do we need this plugin? we can just do a webpack -p 
     //new webpack.optimize.UglifyJsPlugin(),
     
     new HtmlWebpackPlugin({
      filename:'index.html',
      template: 'index-template.html'
    })
  ]

};