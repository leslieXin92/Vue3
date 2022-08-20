import "../css/style.css"
// webpack打包时，不认为css文件是一个模块，需要css-loader去处理一下

// import "css-loader!../css/style.css" // xxx-loader! 意思是

const h1El = document.createElement("h1")
h1El.innerHTML = "hello world"
h1El.className = "title"
document.body.appendChild(h1El)
