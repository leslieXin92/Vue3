# 一、简介

## 1.1 简介

-   2020年9月18日，Vue.js 发布 3.0 版本，代号 One Piece
-   耗时两年多，2600+次提交，30+个RFC，600+次PR，99位贡献者
-   GitHub tags 地址：

## 1.2 Vue3带来了什么

### 1.2.1 性能的提升

-   打包时间减少41%
-   初次渲染快55%，更新渲染快133%
-   内存减少54%
-   ……

### 1.2.2 源码的升级

-   使用 Proxy 代替 defineProperty 实现响应式
-   重写虚拟 DOM 的实现和 Tree-Shaking
-   ……

### 1.2.3 拥抱 TypeScript

Vue3 更好的支持 TypeScript

### 1.2.4 新特性

1.   Composition API
    -   setup 配置
    -   ref 与 reactive
    -   watch 与 watchEffect
    -   provide 与 inject
    -   ……
2.  新的内置组件
    -   Fragment
    -   Teleport
    -   Suspense
3.  其他改变
    -   新的生命钩子
    -   data 选项应始终被声明为一个函数
    -   移除 keyCode 支持作为 v-on 的修饰符
    -   ……



# 二、创建Vue3工程

## 2.1 使用 Vue-cli 创建

查看 @vue/cli 版本，确保 @vue/cli 版本要在 4.5.0 以上

```shell
vue -V
```

安装或升级 @vue/cli

```shell
npm install -g @vue/cli
```

创建项目

```shell
vue create projectName
```

启动

```shell
npm run serve
```

## 2.2 使用 Vite 创建

官方文档：https://v3.cn.vuejs.org/guide/installation.html#vite

Vite 官网：https://vitejs.cn

-   什么是 Vite：新一代前端构建工具
-   优势：
    -   开发环境中，无需打包操作，可快速的冷启动
    -   轻量快速的热重载 ( HMR )
    -   真正的按需编译，不再等待整个应用编译完成

-   传统构建与 Vite 构建对比图

    -   传统构建![](https://raw.githubusercontent.com/leslieXin92/picGo/master/img/202204110734430.png)
    -   Vite 构建![](https://raw.githubusercontent.com/leslieXin92/picGo/master/img/202204110734909.png)

-   创建项目

    ```shell
    npm init vite-app projectName
    ```

-   安装依赖

    ```shell
    npm install
    ```

-   运行

    ```shell
    npm run dev
    ```




# 三、常用Composition API

## 3.1 setup

1.  理解：Vue3 中一个新的配置项，值为一个函数。
2.  setup 是所有 Composition API ( 组合式 API )。
3.  组件中所用到的数据、方法等，都要配置在 setup。
4.  setup 函数的两种返回值：
    1.  若要返回一个对象，则对象中的属性、方法，在模板中均可以直接使用！！！
    2.  若返回一个渲染函数，则可以自定义渲染内容。
5.  tips：
    1.  尽量不要在 Vue2 配置混用：
        -   Vue2 配置 ( data、methods、computed…… ) 中可以访问到 setup 中的属性、方法。
        -   但在 setup 中不能访问到 Vue2 配置 ( data、methods、computed )。
        -   如果有重名，setup 优先。
    2.  setup 不能是一个 async 函数，因为返回值不再是 return 的对象，而是 promise，模板看不到 return 对象中的属性。

## 3.2 ref

1.  作用：定义一个响应式的数据

2.  语法：

    1.  创建一个包含响应式数据的引用对象 ( reference对象 )。

        ```javascript
        const xxx = ref(initValue)
        ```

    2.  JS 中操作数据：

        ```javascript
        xxx.value
        ```

    3.  模板中读取数据：

        ```html
        <div> {{xxx}} </div> 
        ```

3.  tips：

    1.  接收的数据可以是基本类型，也可以是对象类型。
    2.  基本类型的数据，响应式应然是靠 Object.defineProperty() 的 get 与 set 完成的。
    3.  对象类型的数据，内部求救 Vue3 中的新函数——reactive 函数。

## 3.3 reactive

1.  作用：定义一个对象类型的响应式数据 ( 基本类型不要用它，要用ref )。
2.  语法：const 代理对象 = reactive ( 源对象 )，返回一个代理对象 ( Proxy代理对象 )。
3.  reactive 定义的响应式数据是【深层次】的。
4.  内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作。

## 3.4 Vue的响应式原理

### 3.4.1 Vue2的响应式

-   实现原理：

    -   对象类型：通过 Object.defineProperty() 对属性的读取、修改进行拦截 ( 数据劫持 )。

    -   数组类型：通过重写更新数组的·一系列方法来实现拦截 ( 对数组的变更方法进行了包裹 )。

        ```javascript
        Object.defineProperty(data, 'count', {
            get() {},
            set() {}
        })
        ```

-   存在问题：

    -   新增属性、删除属性，页面不会更新。
    -   直接通过下标修改数组，页面不会更新。

-   解决方案：

    ```javascript
    // 新增属性
    this.$set(this.person, 'name', 'yahoo')
    Vue.set(this.person, 'name', 'yahoo')
    
    // 删除属性
    this.$delete(this.person, 'sex')
    Vue.delete(this.person, 'sex')
    
    // 数组变更
    this.$set(this.person, hobbies, 0, 'study')
    Vue.set(this.person, hobbies, 0, 'study')
    this.person.hobbies.splice(0, 1, 'study')
    ```

### 3.4.2 Vue3的响应式

-   实现原理：

    -   通过 Proxy ( 代理 )：拦截对象中任意属性的变化，包括属性值的读写，属性的增删等。<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy" style="text-decoration:none;"> Proxy </a>
    -   通过 Reflect ( 反射 )：反被代理对象的属性进行操作。<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect" style="text-decoration:none;"> Reflect </a>

-   code：

    ```javascript
    new Proxy(person, {
        // 查
        get(target, propName) {
            console.log(`somebody is reading ${propName}`)
            return target[propName]
        },
        // 改/增
        set(target, propName, newVal) {
            console.log(`somebody is changing ${propName}`)
            target[propName] = newVal
        },
        // 删
        deleteProperty(target, propName) {
            console.log(`somebody is deleting ${propName}`)
            return delete target[propName]
        },
    })
    ```


## 3.5 ref与reactive对比

1.  从定义数据角度对比：
    -   ref 用来定义：基本数据类型。
    -   reactive用来定义：对象或数组类型数据。
    -   tips：ref 也可以用来定义对象或数组类型数据，它内部会自动通过 reactive 转为代理对象。
2.  从原理角度对比：
    -   ref 通过 Object.defineProperty() 的 get 与 set 来实现响应式 ( 数据劫持 )。
    -   reactive 通过使用 Proxy 来实现响应式 ( 数据劫持 )，并通过 Reflect 操作源对象内部的数据。
3.  从使用角度对比：
    -   ref 定义的数据：操作数据需要 .value ，读取数据时模板中直接读取，不需要 .value。
    -   reactive 定义的数据：操作数据与读取数据都不需要 .value。

## 3.6 setup两个注意点

1.  setup 执行的时机：在 beforeCreate 之前执行一次，this 是 undefined。
2.  setup 的参数：
    1.  props：值为对象，包含组件外部传递过来且内部声明接受了的属性。
    2.  context：上下文对象
        -   attrs：值为对象，包含组件外部传递过来但没有在 props 配置中声明的属性，相当于 this.$attrs。
        -   slots：收到的插槽内容，相当于 this.$slots。
        -   emit：分发自定义事件的函数，相当于 this.$emit。

## 3.7 computed

1.  与 Vue2 中的 computed 配置功能一致。

2.  写法：

    ```javascript
    // 计算属性简写形式 —— 不考虑计算属性被修改的情况
    person.fullName = computed(() => {
        return `${person.firstName}-${person.lastName}`
    })
    
    // 计算属性完整写法
    person.fullName = computed({
        get () {
            return `${person.firstName}-${person.lastName}`
        },
        set (newVal) {
            const newNameArr = newVal.split('-')
            person.firstName = newNameArr[0]
            person.lastName = newNameArr[1]
        }
    })
    ```

## 3.8 watch

1.  与 Vue2 中 watch 配置一致。

2.  写法：

    ```javascript
    // 情况一：监视ref定义的一个响应式数据
    watch(sum, (newVal, oldVal) => {
        console.log('sum', newVal, oldVal)
    })
    
    // 情况二：监视ref定义的多个响应式数据
    watch([sum, msg], (newVal, oldVal) => {
        console.log('sum or msg', newVal, oldVal)
    })
    
    // 情况三：监视reactive定义的响应式数据中的全部数据 (无法正确获取oldValue、强制开启深度监视)
    watch(person, (newVal, oldVal) => {
        console.log('person', newVal, oldVal)
    }, { deep: false }) // 此处deep为false无效
    
    // 情况四：监视reactive定义的响应式数据中的一个数据
    watch(() => (person.age), (newVal, oldVal) => {
        console.log('person.age', newVal, oldVal)
    })
    
    // 情况五：监视reactive定义的响应式数据的一些数据
    watch([() => (person.name), () => (person.age)], (newVal, oldVal) => {
        console.log('person.name or person.age', newVal, oldVal)
    })
    
    // 特殊情况：子节点深层数据的监听要开启深度监视
    watch(() => (person.job), (newVal, oldVal) => {
        console.log('person.job.salary', newVal, oldVal)
    }, { deep: true }) // 监听子节点的深层数据需要开启深度监视
    ```

3.  tips：

    -   监视 reactive 定义的响应式数据时，无法获取 oldValue，强制开启深度监视 ( deep配置失效 )。
    -   监视 reactive 定义的响应式数据中的某个含有深层数据的属性时，deep配置有效。

## 3.9 watchEffect

-   写法：

    ```javascript
    watchEffect(() => {
        const sumTemp = sum
        const personTemp = person
        console.log('watchEffect', sumTemp, personTemp)
    })
    ```

-   watch 的套路是：既要指明监视的属性，也要指明监视的回调。

-   watchEffect 的套路是：不用指明监视哪个属性，监视的回调中用到了哪个属性，那就监视那个属性。

-   watchEffect 有点像 computed：

    -   但 computed 注重的是结果，即回调函数的返回值，所以必须写 return 返回值。
    -   而 watchEffect 更注重的是过程，即回调函数的函数体，所以不用写 return 返回值。