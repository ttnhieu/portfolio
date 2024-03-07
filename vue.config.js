const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
  transpileDependencies: ['vuetify'],
  runtimeCompiler: true,
  publicPath: '/portfolio/',
  // configureWebpack: {
  //   optimization: {
  //     minimize: process.env.NODE_ENV === 'production',
  //     splitChunks: {
  //       minSize: 10000,
  //       maxSize: 250000,
  //       chunks: 'all',
  //     },
  //   },
  //   performance: {
  //     hints: false,
  //   },
  //   plugins: [
  //     new CompressionWebpackPlugin({
  //       filename: '[path].gz[query]',
  //       algorithm: 'gzip',
  //       test: /\.(js|ts|vue|css|html|svg)$/,
  //       compressionOptions: { level: 1 },
  //       threshold: 10240,
  //       minRatio: 0.8,
  //       deleteOriginalAssets: false,
  //     }),
  //   ],
  // },
};
