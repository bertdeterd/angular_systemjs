/* ----------------------------------------------
 Reason for choosing webpack:
 - Angular 2 is a SPA
 - A SPA is the type of web app webpack is designed and optimized for
---------------------------------------------- */
var webpack = require('webpack');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

/*-------------------------------------------------------
Autoprefixer parses CSS files and adds vendor prefixes to CSS rules 
using the Can I Use database to determine which prefixes are needed.
-------------------------------------------------------*/
const autoprefixer = require('autoprefixer');


module.exports = {

  entry: {
    vendor: './app/vendor',
    app: './app/main',
    polyfills: './app/polyfills'
  },

  postcss: [autoprefixer],

  output: {
    path: path.resolve('dist/'),
    filename: "[name]-bundle.js"
  },


  /*-------------------------------------------------------
  reference for use in production config
  -------------------------------------------------------*/
  webpack: webpack,

  devtool: 'source-map',


  /*-------------------------------------------------------
  modules to resolve
  order matters for debugging in chrome
  -------------------------------------------------------*/
  resolve: {
    extensions: ['', '.ts', '.js'],
    modulesDirectories: ["node_modules"]
  },


  module: {

    loaders: [

      /*-------------------------------------------------------
      process typescript files into JS
      -------------------------------------------------------*/
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },


      /*-------------------------------------------------------
      process require html files in angular components
      raw: Loads raw content of a file (as utf-8)
      Example > template: require('./app.component.html')
      -------------------------------------------------------*/
      {
        test: [/\.html$/],
        loader: "raw-loader",
        exclude: /node_modules/
      },


      /*-------------------------------------------------------
      Example > import './mystyles.css';
      style: Add exports of a module as style to DOM
      css: Loads css file with resolved imports and returns css code
      will be resolved by css-loader and then style-loader
      -------------------------------------------------------*/
      {
        test: /\.css$/,
        loader: 'style!css',
        exclude: /node_modules/
      },


      /*-------------------------------------------------------
      Needed voor Bootstrap 4
      -------------------------------------------------------*/
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      },


      /*-------------------------------------------------------
      Needed voor Bootstrap 4
      -------------------------------------------------------*/
      {
        test: /\.(woff2?|ttf|eot|svg)$/,
        loader: 'url?limit=10000'
      },


      /*-------------------------------------------------------
      Needed voor Bootstrap 4
      -------------------------------------------------------*/
      {
        test: /bootstrap\/dist\/js\/umd\//,
        loader: 'imports?jQuery=jquery'
      }

    ]
  },


  plugins: [

    /*separate appcode, vendorcode etc. 
    what is in vendorbundle do not duplicate in app bundle*/
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index-template.html',
      favicon: 'public/favi.ico'
    }),


    /*-------------------------------------------------------
    This plugin makes a module available as variable in every module. 
    The module is required only if you use the variable.
    Example: Make $ and jQuery available in every module without writing require("jquery").
    -------------------------------------------------------*/
    new ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      "Tether": 'tether',
      "window.Tether": "tether"
    })



  ]

};