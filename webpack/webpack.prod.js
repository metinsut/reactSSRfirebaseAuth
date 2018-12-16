const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackNodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require("copy-webpack-plugin");

const config = {
   mode: 'production',
   target: 'node',
   context: path.resolve(__dirname, ''),
   entry: {
      app: '../server/server.js'
   },
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, '../live')
   },
   plugins: [
      new CleanWebpackPlugin(['live'], {
         root: path.join(__dirname, '..')
      }),
      new CopyWebpackPlugin([{ from: "../build", to: "../live" }])
   ],
   externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
