const path = require('path');

module.exports = {
  entry: './src/Package.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'Package.js',
    libraryExport: 'default',
    libraryTarget: 'umd',
    library: 'Package'
  },
  module: {
    rules: [
      {
        use: {
          loader:'babel-loader',
          options: { presets: ['env'] }
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};