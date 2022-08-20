import "../css/style.css"
// webpack打包时，不认为css文件是一个模块，需要css-loader去处理一下

// import "css-loader!../css/style.css"
// xxx-loader! 意思是这个css需要用这个loader加载，现在更多是在webpack.config.js中配置

import "../css/title.less"

import "../css/image.css"

const divEl = document.createElement("div")
divEl.innerHTML = "hello world"
divEl.className = "title"
document.body.appendChild(divEl)

const bgDivEl = document.createElement("div")
bgDivEl.className = "image-bg"
document.body.appendChild(bgDivEl)
