import path from 'path';

export default {
  devtools: 'eval-source-map',
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    path: '/',
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        loaders: ['babel-loader']
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
}