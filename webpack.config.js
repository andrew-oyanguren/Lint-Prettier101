const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Import the plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Import the CSS extraction plugin
const ESLintPlugin = require('eslint-webpack-plugin'); // Import the ESLint plugin



module.exports = {
  entry: './src/index.js', // Entry point
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply Babel loader to .js files
        exclude: /node_modules/, // Exclude dependencies
        use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
    ],
      },
       {
        test: /\.css$/, // This will match .css files
         use: [
          MiniCssExtractPlugin.loader, // Extracts CSS into separate files
          'css-loader',    // Interprets @import and url() like import/require() and resolves them
          'postcss-loader' // Applies PostCSS to CSS
        ]
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Enables Hot Module Replacement
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to your HTML template
      filename: 'index.html' // Output file name in dist
    }),
    new MiniCssExtractPlugin({ // Extracts CSS into separate files
      filename: '[name].css', // For the main entry point CSS file
      chunkFilename: '[id].css', // For dynamically imported chunks' CSS
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],  // Specify the file types you want to lint
      fix: true,  // Automatically fix problems
    }),
  ],
  mode: 'production', // or 'production' for optimized build
};
