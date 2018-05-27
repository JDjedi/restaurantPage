
const path = require('path');
module.exports = {
  entry: './client/main.js',
  output: {
    path: path.resolve('dist'),
    filename: 'app_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}  
          }
        ]
      }
    ]
  }
}