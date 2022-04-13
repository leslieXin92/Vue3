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