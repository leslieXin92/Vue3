const path = require("path")

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "./dist"), // 必须是绝对路径
		filename: "main.js"
	},
	module: {
		rules: [
			{
				test: /\.css$/, // 正则
				use: ["style-loader", "css-loader"] // 从后往前执行
			},
			{
				test: /\.less$/,
				use:["style-loader", "css-loader",'less-loader']
			}
		]
	}
}
