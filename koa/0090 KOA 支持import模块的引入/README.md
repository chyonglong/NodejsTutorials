# 支持import模块的引入

由于目前原生的node是不支持import引入模块的，假如你使用import引入模块的话，会报如下的错:

这时候我们安装以下依赖
``` bash
npm install babel-plugin-transform-es2015-modules-commonjs babel-register --save
```
复制代码在根目录下创建start.js
``` javascript
require('babel-register')
(
  {
    plugins: ['babel-plugin-transform-es2015-modules-commonjs'],
  }
)

module.exports = require('./app.js')
``` 
复制代码在修改下package.json
``` javascript
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "forever -w start.js"
  },
``` 
复制代码直接运行`npm start`, 这时候可以看到我们的项目已经支持import语法了



参考网站：

nodejs+koa2+mongodb 从0到1搭建自己的项目
https://juejin.im/post/5bad9b1af265da0ae80120fe6