import _ from "lodash-es"
import { sum } from "./js/math"
import "./css/style.css"
import "./css/title.less"

console.log("hello world")
console.log(sum(1, 2))

console.log(_.join(["aaa", "bbb"], "-"))

const titleEl = document.createElement("div")
titleEl.className = "title"
titleEl.innerHTML = "hello vite"
document.body.appendChild(titleEl)
