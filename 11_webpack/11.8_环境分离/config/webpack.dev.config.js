const { merge } = require("webpack-merge")
const commonConfig = require("./webpack.comm.config")

module.exports = merge(commonConfig, {
	mode: "development",
	devtool: "source-map", // 建立js映射，方便控制台调试
	devServer: {
		// contentBase: "./dist",
		hot: true, // 模块热替换（按模块更新而非整个页面）
		// host: "0.0.0.0",
		port: 7777,
		open: true,
		compress: true // 静态文件压缩gzip
		// proxy: {
		// 	"./api": {
		// 		target: "http://localhost:8888",
		// 		pathRewrite: {
		// 			"^/api": "" // url中 “api” 重写为 “”
		// 		},
		// 		secure: false, // https的兼容
		// 		changeOrigin: true // 切换到代理服务器
		// 	}
		// }
	}
})
