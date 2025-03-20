// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  chainWebpack: config => {
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg|JPG)$/i)
      .set('type', 'asset/resource') // Use Webpack 5 asset module
      .set('generator', {
        filename: 'img/[name].[hash:8].[ext]',
      });
  },
};

