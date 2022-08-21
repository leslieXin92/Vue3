import "../css/style.css"
// webpack打包时，不认为css文件是一个模块，需要css-loader去处理一下

// import "css-loader!../css/style.css"
// xxx-loader! 意思是这个css需要用这个loader加载，现在更多是在webpack.config.js中配置

import "../css/title.less"

import "../css/image.css"

import "../font/iconfont.css"

import img from "../img/2.jpg"

const divEl = document.createElement("div")
divEl.innerHTML = "hello world"
divEl.className = "title"
document.body.appendChild(divEl)

const bgDivEl = document.createElement("div")
bgDivEl.className = "image-bg"
document.body.appendChild(bgDivEl)

const imgEl = document.createElement("img")
imgEl.src = img // 不能写死路径
document.body.appendChild(imgEl)

const iEl = document.createElement("i")
iEl.className = "iconfont icon-ashbin"
document.body.appendChild(iEl)
