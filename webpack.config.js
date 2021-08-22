const path = require('path')
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const dist = path.resolve(__dirname, 'dist')

module.exports = {
  mode: 'development',
  devtool: false,
  entry: {
    index: './js/index.js',
  },
  output: {
    path: dist,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  optimization: {
    minimizer: ['...', new CssMinimizerPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin(),

    new HtmlWebpackPlugin({
      template: 'index.html',
    }),

    new WasmPackPlugin({
      crateDirectory: __dirname,
    }),
  ],
  cache: {
    type: 'filesystem',
  },
  experiments: {
    asyncWebAssembly: true,
  },
}
