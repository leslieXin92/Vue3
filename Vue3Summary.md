# 一、Vue3初体验

## 1.1 Vue3 带来的变化

1.  源码方面：

    1.  源码通过 monorepo 的形式来管理源代码：

        Mono：单个；

        Repo：repository 仓库；

        主要是将许多项目的代码存储在同一个 repository 中，这样做的目的是多个包本身相互独立，可以有自己的功能逻辑、单元测试等，同时又在同一个仓库下方便管理，而且模块划分的更加清晰，可维护性、可扩展性更强。

    2.  源码使用 TypeScript 来进行重写：

        在 Vue2 中，Vue使用 Flow 来进行类型检查；

        在 Vue3 中，Vue的源码全部使用 TypeScript 来进行重构，并且 Vue 本省对 TypeScript 支持也更好了。

2.  性能方面：

    1.  使用 Proxy 进行数据劫持：

        在 Vue2 中，Vue2 是使用 Object.defineProperty 来进行劫持数据的 getter 和 setter 方法的，这种形式一致存在一个缺陷就是当给对象添加或删除属性时，时无法劫持和监听的，所以在 Vue2 中不得不提供一些特殊的 API，比如 $set、$delete，事实上都是一些 hack 方法，也增加了开发者学习新的 API 的成本。而在 Vue3 中，Vue使用的 Proxy 来实现数据的劫持。

    2.  删除了一些不必要的 API：

        移除了实例上的 $on、$off、$once；

        移除了一些特性，如 filters、内联模板等。

    3.  包括编译方面的优化：

        生成 Block Tree、Slot 编译优化、diff 算法优化。

## 1.2  hello world

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>hello world</title>
	</head>

	<body>
		<div id="app"></div>
	</body>

	<script src="https://unpkg.com/vue@next"></script>
	<script>
		const app = Vue.createApp({
			template: '<h1> hello world </h1>',
		}).mount('#app')
	</script>
</html>
```

## 1.3 counter案例

### 1.3.1 原生

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>

	<body>
		<div class="counter">1</div>
		<button class="increment">+</button>
		<button class="decrement">-</button>
	</body>

	<script>
		// 1.获取元素
		const counterEl = document.querySelector('.counter')
		const incrementEl = document.querySelector('.increment')
		const decrementEl = document.querySelector('.decrement')

		// 2.定义变量
		let num = 100
		counterEl.innerHTML = num

		// 3.监听事件
		incrementEl.addEventListener('click', () => {
			num += 1
			counterEl.innerHTML = num
		})
		decrementEl.addEventListener('click', () => {
			num -= 1
			counterEl.innerHTML = num
		})
	</script>
</html>
```

### 1.3.2 Vue语法

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>

	<body>
		<div id="app"></div>
	</body>

	<script src="https://unpkg.com/vue@next"></script>
	<script>
		const app = Vue.createApp({
			template: `
                <div> {{num}} </div>
                <button @click='increment'> + </button>
                <button @click='decrement'> - </button>
            `,
			data() {
				return {
					num: 100,
				}
			},
			methods: {
				increment() {
					this.num++
				},
				decrement() {
					this.num--
				},
			},
		}).mount('#app')
	</script>
</html>
```

## 1.4 声明式与命令式

命令式编程：关注的是【how to do】

声明式编程：关注的是【what to do】，由框架（机器）完成【how】的过程

## 1.5 MVC与MVVM

MVC：Model-View-Controller

MVVM：Model-View-ViewModel

![](https://raw.githubusercontent.com/leslieXin92/picGo/master/img/202204041818962.png)

## 1.6 template属性

写法一：

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>template写法一</title>
	</head>

	<body>
		<div id="app"></div>
	</body>

	<script src="https://unpkg.com/vue@next"></script>

	<script type="x-template" id="template">
		<div> {{num}} </div>
		<button @click='increment'> + </button>
		<button @click='decrement'> - </button>
	</script>

	<script>
		const app = Vue.createApp({
			template: `#template`,
			data() {
				return {
					num: 100,
				}
			},
			methods: {
				increment() {
					this.num++
				},
				decrement() {
					this.num--
				},
			},
		}).mount('#app')
	</script>
</html>
```

写法二：

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>template写法二</title>
	</head>

	<body>
		<div id="app"></div>
		<template id="template">
			<div>{{num}}</div>
			<button @click="increment">+</button>
			<button @click="decrement">-</button>
		</template>
	</body>

	<script src="https://unpkg.com/vue@next"></script>

	<script>
		const app = Vue.createApp({
			template: `#template`,
			data() {
				return {
					num: 100,
				}
			},
			methods: {
				increment() {
					this.num++
				},
				decrement() {
					this.num--
				},
			},
		}).mount('#app')
	</script>
</html>
```

## 1.7 data属性

在 Vue2 中，data 属性可以是传入一个函数，也可以是一个对象

在 Vue3 中，data属性必须是传入一个函数

data 中返回的对象会被【Vue 的响应式系统】劫持，之后对该对象的修改或者访问都会在劫持中被处理。



# 二、模板语法

## 2.1 模板语法的简介

-   React 的开发模式：
    -   React 使用的 jsx，所以对应的代码都是编写的类似于 js 的一种语法。
    -   之后通过 Babel 将 jsx 编译成 React.createElement 函数调用。
-   Vue 也支持 jsx 的开发模式
    -   但大多数情况下，使用基于 HTML 的模板语法。
    -   在模板中，允许以声明式的方式将 DOM 和底层组件实例的数据绑定在一起。
    -   在底层的实现中，Vue 将模板编译成虚拟 DOM 渲染函数。

## 2.2 Mustache语法

-   也叫双花括号语法
-   data 属性：`{{ xxx }}`
-   表达式：`{{ new Date() }}`
-   methods中的函数调用：`{{ getTime() }}`
-   三元运算符：`{{ num<0 ? '负数':'正数' }}`
-   computed 计算属性：`{{ xxx }}`

## 2.3 基本指令

-   v-once：当数据发生变化时，元素或者组件及其所有的子元素将视为静态内容并且跳过，可用于性能优化。
-   v-text：用于更新元素的 textContent。
-   v-html：对内容是 HTML 的数据进行特殊解析。
-   v-pre：用于跳过元素和他的子元素的编译过程，显示原始的 Mustache 标签，跳过不需要编译的节点，加快编译的速度。
-   v-cloak：保持在元素上直到关联组件实例结束编译。

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>基础指令</title>
		<style>
			[v-cloak] {
				display: none;
			}
		</style>
	</head>

	<body>
		<div id="app"></div>
		<template id="template">
			<!--! v-once -->
			<div>
				<h1>{{ counter }}</h1>
				<h1 v-once>{{ counter }}</h1>
				<button @click="increment">+</button>
			</div>

			<!--! v-text -->
			<div>
				<h1 v-text="msg"></h1>
			</div>

			<!--! v-html -->
			<div>
				<div v-html="html"></div>
			</div>

			<!--! v-pre -->
			<div>
				<h1 v-pre>{{ msg }}</h1>
			</div>

			<!--! v-cloak -->
			<div>
				<h1 v-pre>{{ msg }}</h1>
			</div>
		</template>
	</body>

	<script src="https://unpkg.com/vue@next"></script>

	<script>
		const app = Vue.createApp({
			template: `#template`,
			data() {
				return {
					msg: 'helle world',
					counter: 0,
					html: '<h1 style="color:red"> yahoo </h1>',
				}
			},
			methods: {
				increment() {
					this.counter++
				},
			},
		}).mount('#app')
	</script>
</html>
```

## 2.4 v-bind

