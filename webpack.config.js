module.exports = {
  entry: './jsrc/theOne.js',
  // output: {
  // path: './indexT.html'
  // // filename: 'bundle.js'
  // },
  devServer: {
    inline: true,
    publicPath: '/',
    filename: 'bundle.js',
    //contentBase: './indexT.html',
    port: 8087
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
