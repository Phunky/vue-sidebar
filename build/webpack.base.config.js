var webpack = require('webpack')

module.exports = {
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {compact: false}
      },
      {
        // edit this for additional asset file types
        test: /\.(png|jpg|gif)$/,
        loader: 'file?name=[name].[ext]?[hash]'
      }
    ]
  },
  // example: if you wish to apply custom babel options
  // instead of using vue-loader's default:
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  },
}
