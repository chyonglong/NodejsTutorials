# get started

步骤 

1 快速建立 npm 项目
npm init -y

2 安装koa
npm install koa

3 新起app.js 文件 代码如下

``` js
const Koa = require('koa');
const app = new Koa();

// ctx.body 赋值时， 就返回给客户端
// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);
console.log('app started at port 3000...');
```

4 跑node app.js 运行
``` bash
node app.js
```

5 浏览器访问http://localhost:3000/



