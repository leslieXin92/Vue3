import { sum } from "./js/math"
const { priceFormat } = require("./js/format")
import "./js/element"

console.log(sum(1, 2))
console.log(priceFormat())

const msg = "hello world"
const people = ["leslie", "cabbage"]

people.forEach(e => console.log(e))
