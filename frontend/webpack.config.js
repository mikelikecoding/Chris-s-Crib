const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  // Import the plugin

module.exports = {
  entry: './src/index.jsx',
  output: {
    // Output to the 'dist' directory
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',  // The output bundle file name
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: {
      // Serve files from the 'dist' folder during development
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',  // Path to your HTML template
    }),
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};
