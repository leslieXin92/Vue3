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
				use: ["style-loader", "css-loader", "less-loader"]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				// use: {
				// 	loader: "file-loader",
				// 	options: {
				// 		outputPath: "img",
				// 		name: "[name]_[hash:6].[ext]"
				// 	}
				// }
				use: {
					loader: "url-loader",
					options: {
						outputPath: "img",
						limit: 1000 // bite
					}
				}
			}
		]
	}
}
