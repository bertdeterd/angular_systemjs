var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config.js');

//extend dev config
var stripLoader = {
 test: [],
 exclude: /node_modules/,
 loader: WebpackStrip.loader('console.log', 'eval')
};
devConfig.module.loaders.push(stripLoader);

//devtool
delete devConfig.devtool;

//export prd config (= extended dev config)
module.exports = devConfig;