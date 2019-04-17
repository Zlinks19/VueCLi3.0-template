// vue.config.js
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  outputDir: "dist", // 打包的目录
  lintOnSave: true, // 在保存时校验格式
  productionSourceMap: false, // 生产环境是否生成 SourceMap
  //代理服务  配置项目跨域用到
  devServer: {
    open: true, // 启动服务后是否打开浏览器
    host: "0.0.0.0",
    port: 9027, // 服务端口
    https: false,
    hotOnly: false,
    proxy: {
      // "/api": {
      //     target: "http://test.xxx.com.cn",
      //     ws: true, // proxy websockets
      //     changeOrigin: true, // needed for virtual hosted sites
      //     pathRewrite: {
      //         "^/api": "" // 设置过滤关键字api ，
      //         //   '^/': ''  // 设置过滤关键字为空 ，
      //     }
      // }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", path.join(__dirname, "src"))
      .set("components", resolve("src/components"));
  }
};
