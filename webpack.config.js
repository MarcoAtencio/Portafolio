const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserJSPlugin = require("terser-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');


const config = {
  mode: 'development',
  entry: {
    'main' : path.resolve(__dirname, './src/js/main.js'),
    'efecto' : path.resolve(__dirname, './src/js/efecto.js'),
    'filtro' : path.resolve(__dirname, './src/js/filtro.js'),  
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    hot: true,
  },
  module: {
    rules: [
        {
            test: /\.css|postcss$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
              },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1
                }
              },
              'postcss-loader',
            ]
          },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      appMountId: 'app',
      template: 'index.html'
    }),
    new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: 'css/[id].css'
    }),
    new CopyPlugin({
        patterns: [
          { from: 'src/assets', to: 'assets' },
        ],
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      },
    },
    minimizer: [
        new OptimizeCSSAssetsPlugin(),new TerserJSPlugin()
      ]
  }
};

module.exports = config;