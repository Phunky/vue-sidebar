var webpack = require('webpack')
var config  = require('./webpack.base.config')

config.entry  = './example/main.js'
config.output = {
  path       : './example',
  publicPath : '/',
  filename   : 'build.js'
}

module.exports.devtool = '#source-map'
module.exports = config
