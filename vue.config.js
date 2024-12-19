const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
  transpileDependencies: ['vuetify'],
  runtimeCompiler: true,
  publicPath: '/portfolio/',
};
