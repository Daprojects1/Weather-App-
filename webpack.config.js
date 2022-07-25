const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
          },
          {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              use: [
                {
                  loader: 'file-loader',
                },
              ]
          },
          {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
          
      ],
    },
  output: {
      path: path.resolve(__dirname, "dist"),
      filename:"main.js"
  }
}
