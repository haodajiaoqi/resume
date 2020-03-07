
const path = require('path')

function resolve(dir) {
  // eslint-disable-next-line
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  outputDir: './blog',
  chainWebpack: config => {
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('api', resolve('src/api'))
      .set('utils', resolve('src/utils'))
      .set('style', resolve('src/style'))
      .set('store', resolve('src/store'))
      .set('router', resolve('src/router'))

    config.resolve.extensions
      .add('.js')
      .add('.vue')
      .add('.styl')
      .add('.scss')
  },
  devServer: {
    open: true,
    port: 7000,
    proxy: {
      '/blog': {
        target: 'http://localhost:9500',
        ws: true,
        changeOrigin: true
      }
    }
  },
  /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
  productionSourceMap: false
}
