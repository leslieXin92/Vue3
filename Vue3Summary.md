# 一、邂逅Vue3

## 1.1 认识Vue

用于构建用户界面的渐进式框架

## 1.2 Vue3新特性

1. 源码角度：
   1. 通过monorepo形式管理源代码。
   2. 使用TS重写。
2. 性能角度：
   1. 使用Proxy进行数据劫持。
   2. 删除了一些不必要的API ( $on、$off、$once、filter、内联模板等 )。
   3. 编译方面的优化 ( 生成Block Tree、Slot编译优化、diff算法优化 )。
3. 新的API：
   1. 由Options API到Composition API。
   2. Hooks函数增加代码的复用性。

## 1.3 如何使用Vue

1. 页面通过CDN的方式引入。
2. 下载Vue的JS文件，手动导入。
3. 通过npm包管理工具安装使用。
4. 通过Vue Cli创建项目使用。