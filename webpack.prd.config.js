var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config.js');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

/* ----------------------------------------------
 Delete all development code like console.log
---------------------------------------------- */ 
var stripLoader = {
 test: [/|.js$/, /\.ts$/ ],
 exclude: /node_modules/,
 loader: WebpackStrip.loader('console.log')
};
devConfig.module.loaders.push(stripLoader);


/* ----------------------------------------------
 Delete devtool in this production config
---------------------------------------------- */ 
delete devConfig.devtool;


 var prodDefiner = new devConfig.webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
});
devConfig.plugins.push(prodDefiner);
devConfig.plugins.push(new devConfig.webpack.optimize.DedupePlugin());


/* ----------------------------------------------
 Export this extended devconfig as 
 our production config 
---------------------------------------------- */ 
module.exports = devConfig;