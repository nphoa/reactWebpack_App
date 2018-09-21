const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// let rule = {};


// rule = {

//     test: /\.css$/,
//     use: [
//         {
//             loader: MiniCssExtractPlugin.loader,
//             options: {
//                 // you can specify a publicPath here
//                 // by default it use publicPath in webpackOptions.output
//                 publicPath: '../'
//             }
//         },
//         "css-loader"
//     ]
// }

module.exports = {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          },
          "css-loader"
        ]
};