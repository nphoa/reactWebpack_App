const path = require('path'),
  manifest = require('./manifest'),
  devServer = require('./devServer'),
  rules = require('./rules/index'),
  plugins = require('./plugins/index');

const entry = [
  "@babel/polyfill",
  path.join(manifest.paths.src, 'index.js')
];

const optimization = {
  splitChunks: {
    //chunks: 'all'
    cacheGroups: {
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: manifest.outputFiles.vendor,
        chunks: 'all'
      }
    }


  }
}
module.exports = {
  //devtool: manifest.IS_PRODUCTION ? false : 'cheap-eval-source-map',
  //context: path.join(manifest.paths.src, manifest.entries.js),
  //watch: !manifest.IS_PRODUCTION,
  mode: 'development',
  entry,
  output: {
    path: manifest.paths.bundle,
    publicPath: '',
    filename: manifest.outputFiles.bundle,
  },
  optimization: optimization,
  module: {
    rules
  },
  plugins,
  devServer,
};
