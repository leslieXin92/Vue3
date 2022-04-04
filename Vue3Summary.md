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

## 1.6 template写法

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

