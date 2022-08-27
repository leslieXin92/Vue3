const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { DefinePlugin } = require("webpack")

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "../dist"), // 必须是绝对路径
		filename: "main.js"
	},
	target: "web", // 为哪个环境打包
	resolve: {
		extensions: [".wasm", "mjs", ".js", ".json", ".veu"], // 默认去找 .xxx 后缀的文件
		mainFiles: ["index"], // 文件夹默认去找 index 文件
		alias: {
			"@": path.resolve(__dirname, "../src"),
			js: path.resolve(__dirname, "../src/js")
		}
	},
	module: {
		rules: [
			// css
			{
				test: /\.css$/, // 正则
				use: ["style-loader", "css-loader"] // 从后往前执行
			},

			// less
			{
				test: /\.less$/,
				use: ["style-loader", "css-loader", "less-loader"]
			},

			// image
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				type: "asset",
				generator: {
					filename: "img/[name]_[hash:6][ext]"
				},
				parser: {
					dataUrlCondition: {
						maxSize: 100 * 1024
					}
				}
			},

			// font
			{
				test: /\.(eot|ttf|woff2?)/,
				type: "asset/resource",
				generator: {
					filename: "font/[name]_[hash:6].[ext]"
				}
			},

			// babel
			{
				test: /\.js$/,
				loader: "babel-loader"
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({ title: "webpack plugins" }),
		new DefinePlugin({ BASE_URL: "'./'" })
	]
}
