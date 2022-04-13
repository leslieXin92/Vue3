const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    transpileDependencies: true, // 兼容ie
    lintOnSave: false // 关闭语法检查
})
