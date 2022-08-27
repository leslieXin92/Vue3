const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { DefinePlugin } = require("webpack")

module.exports = {
	mode: "development", // development、production
	devtool: "source-map", // 建立js映射，方便控制台调试
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "./dist"), // 必须是绝对路径
		filename: "main.js"
	},
	target: "web", // 为哪个环境打包
	devServer: {
		// contentBase: "./dist",
		hot: true // 模块热替换（按模块更新而非整个页面）
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
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({ title: "webpack plugins" }),
		new DefinePlugin({ BASE_URL: "'./'" })
	]
}
