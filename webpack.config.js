// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
// const pathBundle = require('./webpack/manifest');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// module.exports = {
//   mode: 'development',
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: pathBundle.paths.bundle
//   },
//   watch: true,
//   optimization: {
//     splitChunks: {
//       //chunks: 'all'
//       cacheGroups: {
//         commons: {
//           test: /[\\/]node_modules[\\/]/,
//           name: 'vendors',
//           chunks: 'all'
//         }
//       }
      
      
//     }
//   },
//   module: {
//     rules: [
//       {
//         use: 'babel-loader',
//         test: /\.js$/,
//         exclude: '/node_modules/'
//       },
//       {
//         // use: [
//         //   'style-loader',
//         //   'css-loader'
//         // ],
//         test: /\.css$/,
//         use: [
//           {
//             loader: MiniCssExtractPlugin.loader,
//             options: {
//               // you can specify a publicPath here
//               // by default it use publicPath in webpackOptions.output
//               publicPath: '../'
//             }
//           },
//           "css-loader"
//         ]
//       },
//       {
//         use: 'file-loader',
//         //test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/
//         test: /\.(woff|woff2|eot|ttf|otf|jpe?g|gif|png|svg|eot)$/,
//       },

//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template:'./index.html',
//     }),
//     new webpack.ProvidePlugin({
//       '$': 'jquery',
//       'jQuery': 'jquery'
//     }),
//     new MiniCssExtractPlugin({
//       // Options similar to the same options in webpackOptions.output
//       // both options are optional
//       filename: "bundleStype.css",
//       //chunkFilename: "[id].css"
//     })
//   ],
//   devServer: {
//     open: true
//   }
// };

const config = require('./webpack/config');

module.exports = config;