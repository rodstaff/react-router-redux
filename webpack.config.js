module.exports = {
  entry: './jsrc/theOne.js',
  // output: {
  // path: './rod.html',
  // filename: 'bundle.js'
  // },
  devServer: {
    inline: true,
    publicPath: '/',
    filename: 'bundle.js',
  //  contentBase: './jsrc',
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
