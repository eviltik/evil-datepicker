const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/date-picker/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: './date-picker.js',
  },
  // devtool : 'inline-source-map',
  optimization: {
    moduleIds: 'deterministic',
    splitChunks: {
      minSize: 10000,
    }
  },
  plugins: [
    // new BundleAnalyzerPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'to-string-loader',
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'url-loader',
      },
    ]
  }
};
