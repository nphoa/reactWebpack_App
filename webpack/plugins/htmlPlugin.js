const HtmlWebpackPlugin = require('html-webpack-plugin'),
      manifest          = require('./../manifest');

  console.log(manifest.paths.indexHtml);    
module.exports = new HtmlWebpackPlugin({
    template:manifest.paths.indexHtml
})